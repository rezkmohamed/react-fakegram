import React, { useEffect } from 'react';
import Header from '../../UI/Header';
import Notification from '../../UI/Notification';
import classes from './NotificationsPage.module.scss';
import { fetchNotifications, setNotificationsAsSeen } from '../../../services/notification-service';
import { notificationsActions } from '../../../store/notifications-slice';
import { useDispatch } from 'react-redux';
import { useState } from 'react/cjs/react.development';

const NotificationsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        setIsLoading(true);
        fetchNotifications()
        .then(res => {
            setNotifications(res);
            dispatch(notificationsActions.setNotifications(res));
            setIsLoading(false);
        }).catch(err => {
            window.alert('ERRORREEEEE::::: ' + err.message);
            setIsLoading(false);
        });

        setNotificationsAsSeen()
        .then(res => {
            dispatch(notificationsActions.setNotificationsAsSeen());
        }).catch(err => {
            window.alert('PROBLEMA CON IL SETTAGGIO A VISUALIZZATO DELLE NOTIFICHE. ERRORE::::: ' + err.message);
        });
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div className={classes['notifications-container']}>
                {
                    isLoading && 
                    <h1>LOADINGGGGG</h1>
                }
                {
                    !isLoading &&
                    notifications.map(notification => {
                        return(
                            <Notification notification={notification} />
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default NotificationsPage;