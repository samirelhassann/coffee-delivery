import React, { useContext, useState } from "react";

import {
  Container,
  InfoProduct,
  ProductDetails,
} from "./CheckoutCardProduct.styles";

import QuantityControl from "../../../../components/QuantityControl/QuantityControl";
import RemoveButton from "../../../../components/RemoveButton/RemoveButton";

import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { Product } from "../../../../domains/Product";

interface CheckoutCardProductProps {
  product: Product;
  price: number;
  cartQuantity: number;
}

const CheckoutCardProduct = ({
  product,
  price,
  cartQuantity,
}: CheckoutCardProductProps) => {
  const {
    incrementCartProductQuantity,
    decrementCartProductQuantity,
    removeProductFromCart,
  } = useContext(CheckoutContext);
  const [quantity, setQuantity] = useState(cartQuantity);

  const handleRemoveProduct = () => {
    removeProductFromCart(product.id);
  };

  const handleIncrement = () => {
    incrementCartProductQuantity(product.id, 1);
    setQuantity((state) => state + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 2) {
      decrementCartProductQuantity(product.id, 1);
      setQuantity((state) => state - 1);
    }
  };

  const renderPrice = () => {
    return `R$ ${price.toFixed(2)}`;
  };

  return (
    <Container>
      <ProductDetails>
        <img src={product.image} width={64} />
        <InfoProduct>
          <span>{product.title}</span>
          <div>
            <QuantityControl
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
            <RemoveButton onRemove={handleRemoveProduct} />
          </div>
        </InfoProduct>
      </ProductDetails>

      <span className="price">{renderPrice()}</span>
    </Container>
  );
};

export default CheckoutCardProduct;
