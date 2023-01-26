import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

import { v4 as uuidv4 } from "uuid";

import { Address } from "../domains/Address";
import { Product } from "../domains/Product";
import { NewAddressFormData } from "../pages/Checkout/Checkout";
import {
  addNewProductAction,
  createNewCartAction,
  decrementProductQuantityAction,
  incrementProductQuantityAction,
  removeProductAction,
  updateCartStatusAction,
  updateCurrentAddressAction,
  updatePaymentMethodAction,
} from "../reducers/cart/action";
import {
  cartReducer,
  CartState,
  CART_STATUS,
  ProductByQuantity,
} from "../reducers/cart/reducer";

const LOCAL_STORAGE_CYCLES_NAME = "@coffee-delivery:cart-state-1.0.0";

interface CheckoutContextType {
  history: CartState[];
  completedOrder: CartState | null;

  cart: ProductByQuantity[];
  address: Address | null;
  paymentMethod: string | null;

  totalItems: number;
  productsTotalAmount: number;
  deliveryTotalAmount: number;
  totalAmount: number;

  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  incrementCartProductQuantity: (productId: string, quantity: number) => void;
  decrementCartProductQuantity: (productId: string, quantity: number) => void;

  submitOrder: (addressAndPaymentMethod: NewAddressFormData) => void;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

interface CheckoutContextProviderProps {
  children: ReactNode;
}

const CheckoutContextProvider = ({
  children,
}: CheckoutContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      id: null,
      cart: [],
      address: null,
      paymentMethod: null,
      cartStatus: null,
    },
    () => {
      const defaultCartState = {
        id: uuidv4(),
        cart: [],
        address: null,
        paymentMethod: null,
        cartStatus: CART_STATUS.IN_PROGRESS,
      };

      const storedStateAsJSON = localStorage.getItem(LOCAL_STORAGE_CYCLES_NAME);

      if (storedStateAsJSON) {
        const historyOrders: CartState[] = JSON.parse(storedStateAsJSON);

        const inProgressOrder = historyOrders.find(
          (order) => order.cartStatus === CART_STATUS.IN_PROGRESS
        );

        if (inProgressOrder) return inProgressOrder;

        return defaultCartState;
      } else return defaultCartState;
    }
  );
  const [history, setHistory] = useState<CartState[] | null>(null);
  const [completedOrder, setCompletedOrder] = useState<CartState | null>(null);

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(LOCAL_STORAGE_CYCLES_NAME);

    if (storedStateAsJSON) {
      const historyOrders: CartState[] = JSON.parse(storedStateAsJSON);

      setHistory(historyOrders);
    }
  }, []);

  useEffect(() => {
    if (history !== null) {
      const existsCart = history.some((order) => order.id === cartState.id);

      let updatedHistory: CartState[] = [];

      if (existsCart)
        updatedHistory = history.map((order) => {
          if (order.id === cartState.id) return cartState;

          return order;
        });
      else updatedHistory = [...history, cartState];
      setHistory(updatedHistory);

      const stateJSON = JSON.stringify(updatedHistory);

      localStorage.setItem(LOCAL_STORAGE_CYCLES_NAME, stateJSON);

      if (cartState.cartStatus === CART_STATUS.COMPLETED)
        dispatch(createNewCartAction());
    }
  }, [cartState]);

  const { cart, address, paymentMethod } = cartState;
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

  const submitOrder = (addressAndPaymentMethod: NewAddressFormData) => {
    const address: Address = {
      zipCode: addressAndPaymentMethod.zipCode,
      street: addressAndPaymentMethod.street,
      number: addressAndPaymentMethod.number,
      complement: addressAndPaymentMethod.complement,
      district: addressAndPaymentMethod.district,
      city: addressAndPaymentMethod.city,
      state: addressAndPaymentMethod.state,
    };

    setCompletedOrder({
      ...cartState,
      address: address,
      paymentMethod: addressAndPaymentMethod.paymentMethod,
    });

    dispatch(updateCurrentAddressAction(address));
    dispatch(updatePaymentMethodAction(addressAndPaymentMethod.paymentMethod));
    dispatch(updateCartStatusAction(CART_STATUS.COMPLETED));
  };

  return (
    <CheckoutContext.Provider
      value={{
        history,
        completedOrder,
        cart,
        address,
        paymentMethod,
        totalItems,
        productsTotalAmount,
        deliveryTotalAmount,
        totalAmount,
        addProductToCart,
        removeProductFromCart,
        incrementCartProductQuantity,
        decrementCartProductQuantity,
        submitOrder,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
