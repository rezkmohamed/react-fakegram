
const urlBase = 'http://localhost:8080/followers/';

export const addFollow = (idProfileFollower, idProfileFollowed) => {
    const addFollowReq = async () => {
        const response = await fetch(urlBase + idProfileFollower + "/follows/" + idProfileFollowed,{
            method: 'POST',
            body: {},
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
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

export const deleteFollow = (idProfileFollower, idProfileFollowed) => {
    const deleteFollowReq = async () => {
        const response = await fetch(urlBase + idProfileFollower + "/unfollow/" + idProfileFollowed, {
            method: 'DELETE'
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        return true;
    }

    return deleteFollowReq();
}


export const checkIsFollowed = (idProfileLogged, idProfileShowed) => {
    const getFollow = async () => {
        const response = await fetch(urlBase + idProfileLogged + "/checkfollow/" + idProfileShowed);
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        return data;
    }

    return getFollow();
}