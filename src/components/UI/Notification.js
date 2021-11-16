import React from 'react';
import { Link } from 'react-router-dom';

const QUESTION_TYPE = "QUESTION";

const Notification = ({notification}) => {
    return (
        <React.Fragment>
            {
                notification && 
                <div className="media">
                    <img src={notification.profileNotificator.proPic} width="64px" height="64px" className="mr-3" alt="immgggg" />
                    <div className="media-body">
                        <h5 className="mt-0 notification-type">
                            {
                                notification.notificationType !== QUESTION_TYPE &&
                                <div>
                                    <Link to={notification.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>{notification.profileNotificator.nickname}</Link>
                                    {notification.notificationMessage}
                                </div>
                            }                   
                            {
                                notification.notificationType === QUESTION_TYPE &&
                                <div>
                                    <Link to={notification.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>{notification.notificationMessage}</Link>
                                </div>
                            }
                        </h5>
                        <p >MESSAGGIO DELLA NOTIFICA</p>
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default Notification;