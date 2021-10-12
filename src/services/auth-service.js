const urlBase = "http://localhost:8080/";

export const registerNewProfile = (email, password, name, nickname) => {
    const registerProfileReq = async () => {
        const response = await fetch(urlBase + "register", {
            method: 'POST',
            body:JSON.stringify({
                name: name,
                nickname: nickname,
                email: email,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return registerProfileReq();
}

export const login = (email, password) => {
    const loginReq = async () => {
        const response = await fetch(urlBase + "login", {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                pass: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        console.log(response);

        // const data = await response.json();
        // console.log(data);
        return response;
    }

    return loginReq();
}