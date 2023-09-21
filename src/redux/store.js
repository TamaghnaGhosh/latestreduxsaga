// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import producSaga from "./productSaga";
import rootReducer from "./rootReducer";


import createSagaMiddleware from "redux-saga";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(producSaga);
export default store;
