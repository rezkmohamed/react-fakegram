const urlBase = "http://localhost:8080/"

export const registerNewProfile = (email, password, name, nickname) => {
    const registerProfileReq = async () => {
        const response = await fetch(urlBase + "register", {
            method: 'POST',
            body: {
                email,
                password,
                name,
                nickname
            },
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