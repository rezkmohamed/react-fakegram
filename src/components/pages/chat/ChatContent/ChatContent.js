import React, { useState } from "react";
import classes from "./ChatContent.module.scss";
// import defaultImg from "../../../../assets/no-pro-pic.png";
import chatIcon from "../../../../assets/chatIcon.svg";
import { sendMessage } from "../../../../services/message-conversation-service";
import { v4 as UUID } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { conversationsActions } from "../../../../store/conversations-slice";
import moment from 'moment';


let otherProfile;

const ChatContent = ({profile, setLastMessageSelectedConversation}) => {
    const [messageToSend, setMessageToSend] = useState('');
    const conversation = useSelector((state) => state.conversations.value.conversationSelected);
    const dispatch = useDispatch();

    console.log(conversation);

    if(conversation.firstProfile.id === profile.id){
        otherProfile = conversation.secondProfile;
    } else {
        otherProfile = conversation.firstProfile;
    }

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
        setLastMessageSelectedConversation(messageToSend);
        dispatch(conversationsActions.addMessageToConversation(newMessage));
        // conversation.latestMessage = messageToSend;
        sendMessage({...newMessage});
        
        setMessageToSend('');
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
                                            {/* 11/09/2021 */}
                                            { moment(message.dateMillis).format('MMMM Do YYYY, h:mm:ss a') }
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