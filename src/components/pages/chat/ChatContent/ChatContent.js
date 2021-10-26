import React, { useEffect, useState } from "react";
import classes from "./ChatContent.module.scss";
// import defaultImg from "../../../../assets/no-pro-pic.png";
import chatIcon from "../../../../assets/chatIcon.svg";
import { fetchMessagesForConversation, sendMessage, setConversationSelected, setRenderForChat } from "../../../../services/message-conversation-service";
import { v4 as UUID } from 'uuid';
import { conversationsActions } from "../../../../chat-store/conversations-slice";
import { useSelector } from "react-redux";

let otherProfile;

const ChatContent = ({profile, setLastMessageSelectedConversation}) => {
    const [messages, setMessages] = useState([]);
    const [messageToSend, setMessageToSend] = useState('');
    // const [rerender, setRerender] = useState(false);
    const conversation = useSelector((state) => state.conversations.value.conversationSelected);

    if(conversation.firstProfile.id === profile.id){
        otherProfile = conversation.secondProfile;
    } else {
        otherProfile = conversation.firstProfile;
    }

    // console.log(conversation);
    useEffect(() => {
        setConversationSelected(conversation);
        // setRenderForChat(setRerender);
        // fetchMessagesForConversation(conversation.idConversation) 
        // .then(res => {
        //     // console.log(res);
        //     setMessages(res);
        //     conversation.messages = messages;
        // }).catch(err => {
        //     window.alert('Error: ' + err.message + " line 31");
        // })
    }, [conversation, messages]);

    const handleMessageInput = (event) => {
        setMessageToSend(event.target.value);
    }

    const onSubmitMessage = () => {
        let newMessage = {
            message: messageToSend,
            date: new Date().getMilliseconds(),
            idProfileSender: profile.id,
            idProfileReciver: otherProfile.id,
            idMessage: UUID(),
            idConversation: conversation.idConversation
        }
        setMessages([
            newMessage, ...messages
        ]);    
        setLastMessageSelectedConversation(messageToSend);
        conversation.latestMessage = messageToSend;
        sendMessage({...newMessage});

        setMessageToSend('');
        console.log(messages);
    };

    return (
        <React.Fragment>
            <div className={classes['container-chat-area']}>
                <div className={classes['header-chat']}>
                    <div className={classes['avatar-section']}>
                        <div className={classes['avatar-picture']}>
                            <img src={otherProfile.proPic} alt="asdadsads" />
                        </div>
                        <div className={classes['avatar-name']}>
                            {otherProfile.nickname}
                        </div>
                    </div>
                </div>
                <div className={classes['body-chat']}>
                    {
                        conversation.messages.length === 0 &&
                        <p>Non ci sono messaggi in questa conversazione.</p>
                    }
                    {
                        conversation.messages.length > 0 && 
                        conversation.messages.map((message) => {
                            return (
                                <div key={message.idMessage} className={`${classes['message']} ${message.idProfileSender === profile.id ? classes.me : ''}`}>
                                    <div className={classes['message-content']}>
                                        {message.message}
                                        <div className={classes['time']}>
                                            {/* {message.date}  */}
                                            11/09/2021
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
                <div className={classes['footer-chat-area']}>
                    <div className={classes['input-area']}>
                        <textarea value={messageToSend} onChange={handleMessageInput}>
                        </textarea>
                    </div>
                    <div className={classes['send-icon']} onClick={onSubmitMessage}>
                        <img src={chatIcon} alt="sandasinasdniadsniasni" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatContent;