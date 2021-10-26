import { createSlice } from "@reduxjs/toolkit";

const conversationsSlice = createSlice({
    name: 'conversations',
    initialState: {
        conversations: [],
        conversationSelected: null,
    },
    reducers: {
        
    }
});

export const conversationsActions = conversationsSlice.actions;

export default conversationsSlice.reducer;