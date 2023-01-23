import { Address } from "../../domains/Address";
import { Product } from "../../domains/Product";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY",
  UPDATE_CURRENT_ADDRESS = "UPDATE_CURRENT_ADDRESS",
}

export function addNewProductAction(newProduct: Product, quantity: number) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      newProduct,
      quantity,
    },
  };
}

export function removeProductAction(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
}

export function incrementProductQuantityAction(
  productId: string,
  quantity: number
) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
}

export function decrementProductQuantityAction(
  productId: string,
  quantity: number
) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
}

export function updateCurrentAddressAction(updatedAddress: Address) {
  return {
    type: ActionTypes.UPDATE_CURRENT_ADDRESS,
    payload: {
      updatedAddress,
    },
  };
}
