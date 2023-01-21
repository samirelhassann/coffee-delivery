import React, { createContext, ReactNode, useReducer } from "react";

import { Address } from "../domains/Address";
import { Product } from "../domains/Product";
import { addNewProductAction } from "../reducers/cart/action";
import { cartReducer, ProductByQuantity } from "../reducers/cart/reducer";

interface CheckoutContextType {
  cart: ProductByQuantity[];
  currentAddress: Address | null;
  totalItems: number;

  addProductToCart: (product: Product) => void;
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

  const addProductToCart = (product: Product) => {
    dispatch(addNewProductAction(product));
  };

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        currentAddress,
        totalItems,
        addProductToCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
