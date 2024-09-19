import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    
  });

  export default store