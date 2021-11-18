import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    conversations: [],
    conversationSelected: null,
};

const conversationsSlice = createSlice({
    name: 'conversations',
    initialState: { value: initialStateValue},
    reducers: {
        setConversations: (state, action) => {
            /**
             * copia del payload
             */
            state.value.conversations = [...action.payload];
        },

        setSelectedConversation: (state, action) => {
            /**
             * copia del payload
             */
            console.log('setting conversationSelected: ' + action.payload);
            state.value.conversationSelected = JSON.parse(JSON.stringify(action.payload));
            ;
        },

        addMessageToConversation: (state, action) => {
            state.value.conversationSelected.messages.unshift(action.payload);
            state.value.conversations.forEach((cnv) => {
                if(cnv.idConversation === action.payload.idConversation){
                    cnv.latestMessage = action.payload.message;
                }
            });
        }
    }
});

export const conversationsActions = conversationsSlice.actions;

export default conversationsSlice.reducer;