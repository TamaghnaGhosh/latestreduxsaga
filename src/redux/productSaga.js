import { takeEvery, put, call, takeLatest, delay, fork } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";
import { BASE_URL } from "../config";

const URL = `${BASE_URL}products`;

function* getProducts() {
  let data = yield call(() => fetch(URL));
  data = yield data.json();
  console.log("action called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(URL + `?q=${data.query}`);
  result = yield result.json();
  yield delay(1500);
  console.log("action is called", result);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}
function* producSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeLatest(SEARCH_PRODUCT, searchProducts);
}
export default producSaga;
