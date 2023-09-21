import { combineReducers } from "redux";

import { catToData } from "./reducer";
import { productData } from "./producReducer";
import { wishListData } from "./wishListReducer";

export default combineReducers({ catToData, productData, wishListData });
