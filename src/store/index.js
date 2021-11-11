import { configureStore } from "@reduxjs/toolkit";
import conversationsReducer from "./conversations-slice";
import notificationsReducer from "./notifications-slice";

const store = configureStore({
    reducer: {
        conversations: conversationsReducer,
        notifications: notificationsReducer
    }
});

export default store;