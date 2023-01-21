import { produce } from "immer";

import { Address } from "../../domains/Address";
import { Product } from "../../domains/Product";
import { ActionTypes } from "./action";

export interface ProductByQuantity {
  product: Product;
  quantity: number;
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
        if (product.product.id === action.payload.newProduct.id)
          return { ...product, quantity: product.quantity + 1 };

        return product;
      });
    else
      updatedCart.push({
        product: action.payload.newProduct,
        quantity: 1,
      });

    return produce(state, (draft) => {
      draft.cart = updatedCart;
    });
  }
  default:
    return state;
  }
}
