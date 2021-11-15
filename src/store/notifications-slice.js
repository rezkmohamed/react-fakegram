import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    notifications: [],
    newNotifications: false
};


const checkNewNotification = (notifications) => {
    notifications.forEach(notification => {
        if(notification.seen){
            return true;
        }
    });

    return false;
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: { value: initialStateValue},
    reducers: {
        setNotifications: (state, action) => {
            state.value.notifications = [...action.payload];
            state.value.newNotifications = checkNewNotification(action.payload);
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