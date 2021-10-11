const urlBase = 'http://localhost:8080/likes/';

export const checkIsLiked = (idPostShowed) => {
    const token = localStorage.getItem('token');
    const getLike = async () => {
        const response = await fetch(urlBase + "check/" + idPostShowed, {
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

    return getLike();
}

export const addLikePost = (idPost) => {
    const token = localStorage.getItem('token');
    const addLike = async () => {
        const response = await fetch(urlBase + "add/" + idPost, {
            method: 'POST',
            body: {},
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

    return addLike();
}

export const deleteLikePost = (idPost) => {
    const token = localStorage.getItem('token');
    const deleteLike = async () => {
        const response = await fetch(urlBase + "delete/" + idPost, {
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

    return deleteLike();
}