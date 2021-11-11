const urlBase = 'http://localhost:8080/notifications/';

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
        return data;
    }

    return fetchNotificationsReq();
};