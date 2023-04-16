import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
//import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    auth: authReducer,
    //counter: counterReducer,
    product: productReducer,
  },
  middleware: [...middleware],
});
