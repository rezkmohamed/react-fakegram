import React from "react";
import classes from "./ChatContent.module.scss";
import defaultImg from "../../../../assets/no-pro-pic.png";
import chatIcon from "../../../../assets/chatIcon.svg";

const ChatContent = () => {
    return (
        <React.Fragment>
            <div class={classes['container-chat-area']}>
                <div class={classes['header-chat']}>
                    <div class={classes['avatar-section']}>
                        <div class={classes['avatar-picture']}>
                            <img src={defaultImg} alt="asdadsads" />
                        </div>
                        <div class={classes['avatar-name']}>
                            nickname
                        </div>
                    </div>
                </div>
                <div class={classes['body-chat']}>
                    


                    <div class={classes['message']}>

                        <div class={classes['message-content']}>
                            CONTENUTO RANDOM DEL MESSAGGIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                            <div class={classes['time']}>
                                31/03/1999 
                            </div>
                        </div>

                    </div>

                </div>

                <div className={classes['footer-chat-area']}>
                    <div className={classes['input-area']}>
                        <textarea >
                        </textarea>
                    </div>
                    <div class={classes['send-icon']}>
                        <img src={chatIcon} alt="sandasinasdniadsniasni" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatContent;