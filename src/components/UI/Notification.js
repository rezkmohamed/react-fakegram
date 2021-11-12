import React from 'react';
import noProPic from "../../assets/no-pro-pic.png";

const Notification =({notification}) => {
    return (
        <React.Fragment>
            <div class="media" >
                    <img src={noProPic} width="64px" height="64px" class="mr-3" alt="immgggg" />
                    <div class="media-body">
                        <h5 class="mt-0 notification-type">nickname notificatore tipo di notifica</h5>
                        <p >MESSAGGIO DELLA NOTIFICA</p>
                    </div>
            </div>

        </React.Fragment>
    );
}

export default Notification;