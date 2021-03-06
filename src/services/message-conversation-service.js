import { conversationsActions } from "../store/conversations-slice";
import store from "../store";
const urlBaseAPI = "http://localhost:8080/conversations/";
const urlBaseSOCKET = "ws://localhost:8080/chat";

const DEFAULT_IMG = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999";

let webSocket = new WebSocket(urlBaseSOCKET);

export const openWebSocket = () => {   
    let inChat = false;

    webSocket.onopen = (event) => {
        console.log('Open: ' + event);
        let token = localStorage.getItem('token');
        webSocket.send(JSON.stringify("Bearer " + token));
    };

    webSocket.onmessage = (event) => {
        console.log("ON MESSAGE::: ");
        console.log(event.data);
        const message = JSON.parse(event.data);

        store.dispatch(conversationsActions.addMessageToConversation(message));
    }

    webSocket.onclose = (event) => {
        if(inChat){
            this.openWebSocket();
        }
        console.log('Close: ' + event);
    }
};


export const sendMessage = (message) => {
    webSocket.send(JSON.stringify(message));
};


export const fetchConversationsForProfile = () => {
    const token = localStorage.getItem('token');
    const fetchConversation = async () => {
        const response = await fetch(urlBaseAPI, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        for(let conversation of data){
            if(!conversation.firstProfile.proPic){
                conversation.firstProfile.proPic = DEFAULT_IMG;
            }
            if(!conversation.secondProfile.proPic){
                conversation.secondProfile.proPic = DEFAULT_IMG;
            }
        }

        return data;
    }

    return fetchConversation();
};

export const addNewConversation = (idSecondProfile) => {
    const token = localStorage.getItem('token');
    const startConversation = async () => {
        const response = await fetch(urlBaseAPI + "new/" + idSecondProfile, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        return data;
    }

    return startConversation();
};

export const fetchMessagesForConversation = (idConversation) => {
    const token = localStorage.getItem('token');
    const fetchMessages = async () => {
        const response = await fetch(urlBaseAPI + idConversation + "/messages", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        const data = await response.json();

        return data;
    }

    return fetchMessages();
};