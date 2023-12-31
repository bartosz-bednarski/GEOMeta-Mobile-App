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
import achievementsReducer from "./achievements-reducer";
import quizReducer from "./quiz-reducer";
import forumReducer from "./forum-reducer";

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
    achievements: achievementsReducer,
    quiz: quizReducer,
    forum: forumReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
