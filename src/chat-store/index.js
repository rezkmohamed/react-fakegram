import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./conversations-slice";

const store = configureStore({
    reducer: {
        conversations: conversationsReducer
    }
});

export default store;