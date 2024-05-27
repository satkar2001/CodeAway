import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import WebDevCodeInputSlice from "./slices/WebDevCodeInputSlice";
import pythonCompilerSlice from "./slices/PythonCompilerSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    WebDevCodeInputSlice,
    pythonCompilerSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
