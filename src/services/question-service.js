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
};

export const fetchPendingQuestions = () => {
    const token = localStorage.getItem('token');
    const fetchPendingQuestionsReq = async () => {
        const response = await fetch(urlBase + "pending", {
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

    return fetchPendingQuestionsReq();
};

