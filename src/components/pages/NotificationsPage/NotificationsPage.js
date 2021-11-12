import React from 'react';
import Header from '../../UI/Header';
import Notification from '../../UI/Notification';

const NotificationsPage = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div>
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