const urlBase = 'http://localhost:8080/questions/';

export const fetchQuestionsForProfile = (idProfile) => {
    const token = localStorage.getItem('token');
    const fetchQuestionsForProfileReq = async () => {
        const response = await fetch(urlBase + "answered/" + idProfile, {
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

    return fetchQuestionsForProfileReq();
}