import { configureStore } from "@reduxjs/toolkit";
import authStatusReducer from "./authStatus-reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedAuthorizationReducer = persistReducer(
  persistConfig,
  authStatusReducer
);
export const store = configureStore({
  reducer: {
    authorization: persistedAuthorizationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
