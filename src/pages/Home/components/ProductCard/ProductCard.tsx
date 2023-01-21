import React, { useContext } from "react";

import {
  ButtonsArea,
  Container,
  PriceAndButtonsArea,
  PriceArea,
  ProductInfoArea,
  TagsArea,
} from "./ProductCard.styles";

import ProductCartBox from "../../../../components/ProductCartBox/ProductCartBox";
import QuantityControl from "../../../../components/QuantityControl/QuantityControl";
import Tag from "../../../../components/Tag/Tag";

import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { Product } from "../../../../domains/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addProductToCart } = useContext(CheckoutContext);

  const addProduct = () => {
    addProductToCart(product);
  };

  return (
    <Container>
      <img className="coffeeImage" src={product.image} width={120} />

      <TagsArea>
        {product.tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </TagsArea>

      <ProductInfoArea>
        <header>{product.title}</header>
        <span>{product.description}</span>
      </ProductInfoArea>

      <PriceAndButtonsArea>
        <PriceArea>
          <span className="priceSign">R$</span>
          <span className="price">{product.price.toFixed(2)}</span>
        </PriceArea>

        <ButtonsArea>
          <QuantityControl />
          <ProductCartBox onAddProduct={addProduct} />
        </ButtonsArea>
      </PriceAndButtonsArea>
    </Container>
  );
};

export default ProductCard;
