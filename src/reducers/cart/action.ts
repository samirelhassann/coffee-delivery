import { Address } from "../../domains/Address";
import { Product } from "../../domains/Product";
import { CART_STATUS } from "./reducer";

export enum ActionTypes {
  UPDATE_CART_STATUS = "UPDATE_CART_STATUS",
  CREATE_NEW_CART = "CREATE_NEW_CART",

  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY",
  UPDATE_CURRENT_ADDRESS = "UPDATE_CURRENT_ADDRESS",
  UPDATE_PAYMENT_METHOD = "UPDATE_PAYMENT_METHOD",
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

export function updatePaymentMethodAction(paymentMethod: string) {
  return {
    type: ActionTypes.UPDATE_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  };
}

export function updateCartStatusAction(status: CART_STATUS) {
  return {
    type: ActionTypes.UPDATE_CART_STATUS,
    payload: {
      status,
    },
  };
}

export function createNewCartAction() {
  return {
    type: ActionTypes.CREATE_NEW_CART,
  };
}
