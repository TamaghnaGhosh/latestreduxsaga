import { Add_TO_CART, EMPTY_CART, QUANTITYRMV_ITEMS, QUANTITYADD_ITEMS } from "./constant";

export const catToData = (data = [], action) => {

  switch (action.type) {

    case Add_TO_CART:
      console.log("Add_TO_CART to condition", action);
      action.data.quantity = 1
      return [action.data, ...data];

    case QUANTITYADD_ITEMS:
      console.log("QUANTITYADD_ITEMS", action.data);
      if (action.data.quantity === undefined && action.key === "wish") {

        if (data.length !== 0) {
          let alreadyItemAddInCart = data.find((alreadyAddItem) => alreadyAddItem?.id === action.data.id);
          if (alreadyItemAddInCart?.quantity === undefined) {
            return [action.data, ...data];
          }
          else {
            alreadyItemAddInCart.quantity += 1;
            return [...data];
          }
        }
        else {
          action.data.quantity = 1
          return [action.data, ...data];
        }
      }
      action.data.quantity += 1;
      return [...data];

    case QUANTITYRMV_ITEMS:
      console.log("QUANTITYRMV_ITEMS to condition", action.data);
      if (action.data.quantity > 1) {
        action.data.quantity -= 1;
      } else {
        const remainingItems = data.filter((item, i) => item.id !== action.data.id);
        if (window.confirm(`Do you really want to Remove this ${action.data.name} of the item?`)) {
          return [...remainingItems];
        }
      }
      return [...data];

    case EMPTY_CART:
      console.log("EMPTY_CART to condition", action);
      data = [];
      return [...data];

    default:
      return data;
  }
};
