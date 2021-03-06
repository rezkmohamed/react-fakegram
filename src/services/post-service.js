const urlBase = 'http://localhost:8080/posts/';


export const fetchPosts = () => {
    const token = localStorage.getItem('token');
        const fetchData = async () => {
            try {
                const response = await fetch(urlBase, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    }
                });
                if(!response.ok && !response.status !== '204'){
                    console.log('error: ' + response.status);
                    throw new Error('Error: ' + response.status);
                }
                const data = await response.json();
                console.log(data);
    
                return data;
            } catch (error) {
                
            }
        }
        const posts = fetchData();

        return posts;
};

export const fetchPostsByIdProfile = (idProfile) => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
        const response = await fetch(urlBase + "profile/" + idProfile, {
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

    const posts = fetchData();
    return posts;
}

export const fetchPostById = (idPost) => {
    const token = localStorage.getItem('token');
    const fetchData = async () => {
        const response = await fetch(urlBase + "detail/" + idPost, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        });
        if(!response.ok && !response.status !== '204'){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();

        console.log(data);
        return data;
    }

    const post = fetchData();
    return post;
}

export const addNewPost = (img, description) => {
    const token = localStorage.getItem('token');
    const addPost = async () => {
        const response = await fetch(urlBase + "save", 
        {
            method: 'POST',
            body: JSON.stringify({
                img: img,
                description: description
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
    }

    return addPost();
}

export const addNewPostWithFileImg = (uploadData) => {
    const token = localStorage.getItem('token');
    const addNewPostWithFileImgReq = async () => {
        const response = await fetch(urlBase + "newpost", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            body: uploadData
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }

        return true;
    }

    return addNewPostWithFileImgReq();
};