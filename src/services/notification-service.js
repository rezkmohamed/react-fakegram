import noProPic from "../assets/no-pro-pic.png";

const urlBase = 'http://localhost:8080/notifications/';


const transformNotificationObj = (notification) => {
    if(!notification.profileNotificator.proPic) {
        notification.profileNotificator.proPic = noProPic;
    }
    switch(notification.notificationType){
        case "LIKE":
            notification.notificationMessage = "ha messo like al post";
            notification.link = `/posts/detail/${notification.idPost}`;
            break;
        case "COMMENT":
            notification.notificationMessage = "ha commentato il tuo post";
            notification.link = `/posts/detail/${notification.idPost}`;
            break;
        case "FOLLOW":
            notification.notificationMessage = "ha iniziato a seguirti";
            notification.link = `/profiles/${notification.profileNotificator.id}`;
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