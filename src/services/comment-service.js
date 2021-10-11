const urlBase = 'http://localhost:8080/comments/';

/**
 * FIXME: TO-DO
 */

export const fetchCommentsForPost = (idPost) => {
    const token = localStorage.getItem('token');
    const fetchComments = async () => {
        const response = await fetch(urlBase + idPost, {
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

    return fetchComments();
}

export const addComment = (commentText, idPost) => {
    const token = localStorage.getItem('token');
    const addCommentReq = async () => {
        const response = await fetch(urlBase + "add", {
            method: 'POST',
            body: JSON.stringify({
                comment: commentText,
                idPost: idPost
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            }
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
    }

    return addCommentReq();
}