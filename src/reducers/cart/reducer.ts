import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

import { Address } from "../../domains/Address";
import { Product } from "../../domains/Product";
import { ActionTypes } from "./action";

export interface ProductByQuantity {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export enum CART_STATUS {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface CartState {
  id: string | null;
  cart: ProductByQuantity[];
  address: Address | null;
  paymentMethod: string | null;
  cartStatus?: CART_STATUS;
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
  case ActionTypes.ADD_PRODUCT: {
    let updatedCart = [...state.cart];

    const hasProduct = updatedCart.some(
      (product) => product.product.id === action.payload.newProduct.id
    );

    if (hasProduct)
      updatedCart = updatedCart.map((product) => {
        if (product.product.id === action.payload.newProduct.id) {
          const finalQuantity = product.quantity + action.payload.quantity;
          return {
            ...product,
            quantity: finalQuantity,
            totalPrice: product.product.price * finalQuantity,
          };
        }

        return product;
      });
    else
      updatedCart.push({
        product: action.payload.newProduct,
        quantity: action.payload.quantity,
        totalPrice: action.payload.newProduct.price * action.payload.quantity,
      });

    return produce(state, (draft) => {
      draft.cart = updatedCart;
    });
  }
  case ActionTypes.REMOVE_PRODUCT: {
    let updatedCart = [...state.cart];

    updatedCart = updatedCart.filter(
      (product) => product.product.id !== action.payload.productId
    );

    return produce(state, (draft) => {
      draft.cart = updatedCart;
    });
  }
  case ActionTypes.INCREMENT_PRODUCT_QUANTITY: {
    let updatedCart = [...state.cart];

    updatedCart = updatedCart.map((product) => {
      if (product.product.id === action.payload.productId) {
        const finalQuantity = product.quantity + action.payload.quantity;
        return {
          ...product,
          quantity: finalQuantity,
          totalPrice: product.product.price * finalQuantity,
        };
      }

      return product;
    });

    return produce(state, (draft) => {
      draft.cart = updatedCart;
    });
  }
  case ActionTypes.DECREMENT_PRODUCT_QUANTITY: {
    let updatedCart = [...state.cart];

    updatedCart = updatedCart.map((product) => {
      if (product.product.id === action.payload.productId) {
        const finalQuantity = product.quantity - action.payload.quantity;
        return {
          ...product,
          quantity: finalQuantity,
          totalPrice: product.product.price * finalQuantity,
        };
      }

      return product;
    });

    return produce(state, (draft) => {
      draft.cart = updatedCart;
    });
  }
  case ActionTypes.UPDATE_CURRENT_ADDRESS:
    return produce(state, (draft) => {
      draft.address = action.payload.updatedAddress;
    });
  case ActionTypes.UPDATE_PAYMENT_METHOD:
    return produce(state, (draft) => {
      draft.paymentMethod = action.payload.paymentMethod;
    });
  case ActionTypes.CREATE_NEW_CART:
    return {
      id: uuidv4(),
      cart: [],
      address: null,
      paymentMethod: null,
      cartStatus: CART_STATUS.IN_PROGRESS,
    };

  case ActionTypes.UPDATE_CART_STATUS:
    return produce(state, (draft) => {
      draft.cartStatus = action.payload.status;
    });

  default:
    return state;
  }
}
