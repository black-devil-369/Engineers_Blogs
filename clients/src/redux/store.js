import { configureStore, combineReducers } from "@reduxjs/toolkit";
import useReducer from "./user/userSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import themReducer from "./theme/themeSlice.js";
const rootRuducer = combineReducers({
  user: useReducer,
  theme: themReducer,
});
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootRuducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
