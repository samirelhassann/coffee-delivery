import { produce } from "immer";

import { Address } from "../../domains/Address";
import { Product } from "../../domains/Product";
import { ActionTypes } from "./action";

export interface ProductByQuantity {
  product: Product;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  cart: ProductByQuantity[];
  currentAddress: Address | null;
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
  default:
    return state;
  }
}
