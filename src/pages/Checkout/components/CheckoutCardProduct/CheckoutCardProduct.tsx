import React from "react";

import {
  Container,
  InfoProduct,
  ProductDetails,
} from "./CheckoutCardProduct.styles";

import QuantityControl from "../../../../components/QuantityControl/QuantityControl";
import RemoveButton from "../../../../components/RemoveButton/RemoveButton";

interface CheckoutCardProductProps {
  icon: string;
  productTitle: string;
  price: string;
}

const CheckoutCardProduct = ({
  icon,
  productTitle,
  price,
}: CheckoutCardProductProps) => {
  return (
    <Container>
      <ProductDetails>
        <img src={icon} width={64} />
        <InfoProduct>
          <span>{productTitle}</span>
          <div>
            <QuantityControl />
            <RemoveButton />
          </div>
        </InfoProduct>
      </ProductDetails>

      <span className="price">{price}</span>
    </Container>
  );
};

export default CheckoutCardProduct;
