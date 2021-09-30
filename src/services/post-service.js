const urlBase = 'http://localhost:8080/posts/';

export const fetchPosts = () => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlBase);
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
    const fetchData = async () => {
        const response = await fetch(urlBase + "profile/" + idProfile);
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
    const fetchData = async () => {
        const response = await fetch(urlBase + "detail/" + idPost);
        if(!response.ok && !response.status !== '204'){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        return data;
    }

    const post = fetchData();
    return post;
}

export const addNewPost = (img, description) => {
    const addPost = async () => {
        const response = await fetch(urlBase + "save", 
        {
            method: 'POST',
            body: JSON.stringify({
                img: img,
                description: description,
                idProfile: 'a'
            }),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
          
        });

        if(!response.ok){
            console.log('error: ' + response.status);
            throw new Error('Error: ' + response.status);
        }
    }

    return addPost();
}