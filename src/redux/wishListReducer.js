import { WISHLIST_ITEMS, WISHLISTRMV_ITEMS } from "./constant";
export const wishListData = (data = [], action) => {
    switch (action.type) {

        case WISHLIST_ITEMS:
            console.log("WISHLIST_ITEMS to condition", action);
            return [action.data, ...data];

        case WISHLISTRMV_ITEMS:
            console.log("WISHLISTRMV_ITEMS to condition", action);
            console.log(action.data);
            const remainingItems = data.filter((item, i) => item.id !== action.data);
            return [...remainingItems];

        default:
            return data;
    }
};