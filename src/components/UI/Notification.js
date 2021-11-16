import React from 'react';
import { Link } from 'react-router-dom';

const Notification = ({notification}) => {
    return (
        <React.Fragment>
            {
                notification && 
                <div className="media">
                    <img src={notification.profileNotificator.proPic} width="64px" height="64px" className="mr-3" alt="immgggg" />
                    <div className="media-body">
                        <h5 className="mt-0 notification-type"><Link to={notification.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>{notification.profileNotificator.nickname}</Link> {notification.notificationMessage}</h5>
                        <p >MESSAGGIO DELLA NOTIFICA</p>
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default Notification;