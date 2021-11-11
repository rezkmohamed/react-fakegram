import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    notifications: [],
    newNotifications: false
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: { value: initialStateValue},
    reducers: {
        setNotifications: (state, action) => {
            /**
             * TODO
             */
        },
        setNotificationsAsSeen: (state, action) => {
            /**
             * TODO
             */
        }
    }
});

export const notificationsActions = notificationsSlice.actions;

export default notificationsSlice.reducer;