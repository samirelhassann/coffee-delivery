import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

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

  const [quantity, setQuantity] = useState(1);

  const addProduct = () => {
    addProductToCart(product, quantity);
    setQuantity(1);

    toast.success(`${product.title} added to the cart`, {
      autoClose: 1500,
      hideProgressBar: true
    });
  };

  const handleIncrement = () => {
    setQuantity((state) => state + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 2) setQuantity((state) => state - 1);
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
          <QuantityControl
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <ProductCartBox onAddProduct={addProduct} />
        </ButtonsArea>
      </PriceAndButtonsArea>
    </Container>
  );
};

export default ProductCard;
