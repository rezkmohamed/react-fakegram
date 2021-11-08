
const urlBaseSOCKET = "ws://localhost:8080/notifications";

let webSocket = new WebSocket(urlBaseSOCKET);

export const openNotificationSocket = () => {
    let inApp = true;

    webSocket.onopen = (event) => {
        console.log('Open: ' + event);
        let token = localStorage.getItem('token');
        webSocket.send(JSON.stringify("Bearer " + token));
    };

    webSocket.onmessage = (event) => {
        console.log("ON MESSAGE::: ");
        console.log(event.data);
        const notification = JSON.parse(event.data);
        /**
         * FIXME
         */
    };

    webSocket.onclose = (event) => {
        if(inApp) {
            this.openWebSocket();
            return;
        }
        console.log('Close: ' + event);
    }
};

