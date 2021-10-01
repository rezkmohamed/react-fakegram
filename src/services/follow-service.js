
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