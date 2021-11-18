import noProPic from "../assets/no-pro-pic.png";
import questionImg from "../assets/questionimg.png";

const urlBase = 'http://localhost:8080/notifications/';


const transformNotificationObj = (notification) => {
    if(!notification.profileNotificator.proPic) {
        notification.profileNotificator.proPic = noProPic;
    }
    switch(notification.notificationType){
        case "LIKE":
            notification.notificationMessage = " ha messo like al post";
            notification.link = `/posts/detail/${notification.post.idPost}`;
            break;
        case "COMMENT":
            notification.notificationMessage = " ha commentato il tuo post";
            notification.link = `/posts/detail/${notification.post.idPost}`;
            break;
        case "FOLLOW":
            notification.notificationMessage = " ha iniziato a seguirti";
            notification.link = `/profiles/${notification.profileNotificator.id}`;
            break;
        case "QUESTION":
            notification.notificationMessage = "qualcuno ha una domanda per te";
            notification.profileNotificator.proPic = questionImg;
            notification.link = "/pending";
            break;
        default: 
            return;
    }
};

export const fetchNotifications = () => {
    const token = localStorage.getItem('token');
    const fetchNotificationsReq = async () => {
        const response = await fetch(urlBase, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        for(let notification of data){
            transformNotificationObj(notification);
        }

        return data;
    }

    return fetchNotificationsReq();
};

export const setNotificationsAsSeen = () => {
    const token = localStorage.getItem('token');
    const setNotificationsAsSeenReq = async () => {
        const response = await fetch(urlBase + "setseen", {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return setNotificationsAsSeenReq();
};