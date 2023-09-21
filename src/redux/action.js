import { Add_TO_CART, EMPTY_CART, QUANTITYRMV_ITEMS, WISHLIST_ITEMS, WISHLISTRMV_ITEMS, QUANTITYADD_ITEMS } from "./constant";
export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: Add_TO_CART,
    data,
  };
};

export const wishListToCart = (data,) => {
  console.log("action called wishListToCart", data);
  return {
    type: WISHLIST_ITEMS,
    data
  };
};

export const wishListRmvFromCart = (data) => {
  console.log("action called wishListFromCart", data);
  return {
    type: WISHLISTRMV_ITEMS,
    data,
  };
};

export const quentityAddToCart = (data, key) => {
  console.log("action quentityAddToCart", data, key);
  return {
    type: QUANTITYADD_ITEMS,
    data,
    key
  };
};

export const quentityRemoveFromCart = (data) => {
  console.log("action quentityRmvFromCart", data);
  return {
    type: QUANTITYRMV_ITEMS,
    data,
  };
};

export const emptyCart = (data) => {
  console.log("action emptyCart");
  return {
    type: EMPTY_CART,
    data,
  };
};
