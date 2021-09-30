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

