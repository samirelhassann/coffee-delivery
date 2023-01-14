import React from "react";

import {
  ButtonsArea,
  Container,
  PriceAndButtonsArea,
  PriceArea,
  ProductInfoArea,
  TagsArea,
} from "./ProductCard.styles";

import CartBox from "../../../../components/CartBox/CartBox";
import QuantityControl from "../../../../components/QuantityControl/QuantityControl";
import Tag from "../../../../components/Tag/Tag";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  tags: string[];
}

const ProductCard = ({
  image,
  title,
  description,
  price,
  tags,
}: ProductCardProps) => {
  return (
    <Container>
      <img className="coffeeImage" src={image} width={120} />

      <TagsArea>
        {tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </TagsArea>

      <ProductInfoArea>
        <header>{title}</header>
        <span>{description}</span>
      </ProductInfoArea>

      <PriceAndButtonsArea>
        <PriceArea>
          <span className="priceSign">R$</span>
          <span className="price">{price}</span>
        </PriceArea>

        <ButtonsArea>
          <QuantityControl />
          <CartBox />
        </ButtonsArea>
      </PriceAndButtonsArea>
    </Container>
  );
};

export default ProductCard;
