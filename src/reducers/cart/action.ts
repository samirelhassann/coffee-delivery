import { Address } from "../../domains/Address";
import { Product } from "../../domains/Product";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_CURRENT_ADDRESS = "UPDATE_CURRENT_ADDRESS",
}

export function addNewProductAction(newProduct: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      newProduct,
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
