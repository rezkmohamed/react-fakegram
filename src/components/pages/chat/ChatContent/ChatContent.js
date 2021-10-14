import React from "react";
import classes from "./ChatContent.module.scss";
import defaultImg from "../../../../assets/no-pro-pic.png";
import chatIcon from "../../../../assets/chatIcon.svg";

const ChatContent = () => {
    return (
        <React.Fragment>
            <div className={classes['container-chat-area']}>
                <div className={classes['header-chat']}>
                    <div className={classes['avatar-section']}>
                        <div className={classes['avatar-picture']}>
                            <img src={defaultImg} alt="asdadsads" />
                        </div>
                        <div className={classes['avatar-name']}>
                            nickname
                        </div>
                    </div>
                </div>
                <div className={classes['body-chat']}>
                    


                    <div className={classes['message']}>

                        <div className={classes['message-content']}>
                            CONTENUTO RANDOM MESSAGGIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                            <div className={classes['time']}>
                                21/09/2021 11:04 
                            </div>
                        </div>

                    </div>

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