import React, { useEffect } from "react";
import classes from "./ChatContent.module.scss";
// import defaultImg from "../../../../assets/no-pro-pic.png";
import chatIcon from "../../../../assets/chatIcon.svg";
import { fetchMessagesForConversation } from "../../../../services/message-conversation-service";

let otherProfile;

const ChatContent = ({conversation, profile}) => {
    if(conversation.firstProfile.id === profile.id){
        otherProfile = conversation.secondProfile;
    } else {
        otherProfile = conversation.firstProfile;
    }

    useEffect(() => {
        fetchMessagesForConversation(conversation.idConversation) 
        .then(res => {
            console.log(res);
        }).catch(err => {
            window.alert('Error: ' + err.message);
        })
    }, [conversation]);

    console.log(conversation);

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
                        <div className={classes['message']}>
                            <div className={classes['message-content']}>
                                CONTENUTO RANDOM MESSAGGIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                                <div className={classes['time']}>
                                    21/09/2021 11:04 
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={classes['footer-chat-area']}>
                    <div className={classes['input-area']}>
                        <textarea >
                        </textarea>
                    </div>
                    <div className={classes['send-icon']}>
                        <img src={chatIcon} alt="sandasinasdniadsniasni" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatContent;