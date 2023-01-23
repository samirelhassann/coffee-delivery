import React, { createContext, ReactNode, useReducer } from "react";

import { Address } from "../domains/Address";
import { Product } from "../domains/Product";
import {
  addNewProductAction,
  decrementProductQuantityAction,
  incrementProductQuantityAction,
  removeProductAction,
} from "../reducers/cart/action";
import { cartReducer, ProductByQuantity } from "../reducers/cart/reducer";

interface CheckoutContextType {
  cart: ProductByQuantity[];
  currentAddress: Address | null;
  totalItems: number;

  productsTotalAmount: number;
  deliveryTotalAmount: number;
  totalAmount: number;

  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  incrementCartProductQuantity: (productId: string, quantity: number) => void;
  decrementCartProductQuantity: (productId: string, quantity: number) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutContextProviderProps {
  children: ReactNode;
}

const CheckoutContextProvider = ({
  children,
}: CheckoutContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    currentAddress: null,
  });

  const { cart, currentAddress } = cartState;
  const totalItems = cart.length;

  const productsTotalAmount = cart
    .map((prodByQtd) => prodByQtd.totalPrice)
    .reduce((total, curr) => total + curr, 0);

  const deliveryTotalAmount = 10.99;

  const totalAmount = productsTotalAmount + deliveryTotalAmount;

  const addProductToCart = (product: Product, quantity: number) => {
    dispatch(addNewProductAction(product, quantity));
  };

  const removeProductFromCart = (productId: string) => {
    dispatch(removeProductAction(productId));
  };

  const incrementCartProductQuantity = (
    productId: string,
    quantity: number
  ) => {
    dispatch(incrementProductQuantityAction(productId, quantity));
  };

  const decrementCartProductQuantity = (
    productId: string,
    quantity: number
  ) => {
    dispatch(decrementProductQuantityAction(productId, quantity));
  };

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        currentAddress,
        totalItems,
        productsTotalAmount,
        deliveryTotalAmount,
        totalAmount,
        addProductToCart,
        removeProductFromCart,
        incrementCartProductQuantity,
        decrementCartProductQuantity,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
