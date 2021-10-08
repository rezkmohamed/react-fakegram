const urlBase = 'http://localhost:8080/followers/';

export const addFollow = (idProfileFollowed) => {
    const token = localStorage.getItem('token');
    const addFollowReq = async () => {
        const response = await fetch(urlBase + "follows/" + idProfileFollowed,{
            method: 'POST',
            body: {},
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
    return addFollowReq();
}

export const deleteFollow = (idProfileFollowed) => {
    const token = localStorage.getItem('token');
    const deleteFollowReq = async () => {
        const response = await fetch(urlBase + "unfollow/" + idProfileFollowed, {
            method: 'DELETE',
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

    return deleteFollowReq();
}


export const checkIsFollowed = (idProfileShowed) => {
    const token = localStorage.getItem('token');
    const getFollow = async () => {
        const response = await fetch(urlBase + "checkfollow/" + idProfileShowed, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        return data;
    }

    return getFollow();
}