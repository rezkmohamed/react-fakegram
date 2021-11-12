import React from 'react';
import Header from '../../UI/Header';
import Notification from '../../UI/Notification';
import classes from './NotificationsPage.module.scss';

const NotificationsPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div className={classes['notifications-container']}>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />

            </div>
        </React.Fragment>
    );
}

export default NotificationsPage;