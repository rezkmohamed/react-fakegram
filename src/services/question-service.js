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

export const fetchPendingQuestion = (idQuestion) => {
    const token = localStorage.getItem('token');
    const fetchPendingQuestionReq = async () => {
        const response = await fetch(urlBase + "pending/" + idQuestion, {
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

    return fetchPendingQuestionReq();
};

export const addNewQuestion = (question) => {
    const token = localStorage.getItem('token');
    const addNewQuestionReq = async () => {
        const response =  await fetch(urlBase + "new", {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return addNewQuestionReq();
};

export const updateQuestion = (idQuestion, answer) => {
    const token = localStorage.getItem('token');
    const updateQuestionReq = async () => {
        const response = await fetch(urlBase + idQuestion + "/update/" + answer, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return updateQuestionReq();
};

export const setQuestionToPending = (idQuestion) => {
    const token = localStorage.getItem('token');
    const setQuestionToPendingReq = async () => {
        const response = await fetch(urlBase + idQuestion + "/settopending", {
            method: 'PUT',
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

    return setQuestionToPendingReq();
};