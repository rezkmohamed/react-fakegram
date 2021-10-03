const urlBase = 'http://localhost:8080/likes/';

export const checkIsLiked = (idProfileLogged, idPostShowed) => {
    const getLike = async () => {
        const response = await fetch(urlBase + "check/" + idProfileLogged + "/" + idPostShowed);
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        return data;
    }

    return getLike();
}

export const addLikePost = (idProfile, idPost) => {
    const addLike = async () => {
        const response = await fetch(urlBase + "add/" + idProfile + "/" + idPost, {
            method: 'POST',
            body: {}
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return addLike();
}

export const deleteLikePost = (idProfile, idPost) => {
    const deleteLike = async () => {
        const response = await fetch(urlBase + "delete/" + idProfile + "/" + idPost, {
            method: 'DELETE'
        });
        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        return true;
    }

    return deleteLike();
}