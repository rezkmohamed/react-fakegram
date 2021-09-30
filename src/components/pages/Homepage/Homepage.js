import React, { useState, useEffect, useCallback} from "react";
import Header from '../../UI/Header';
import PostCardWithPics from "../../UI/PostCardWithPics";
import { fetchPosts } from "../../../services/post-service";

const urlBase = 'http://localhost:8080/posts';


const Homepage = (props) => {
    /**
     * RENDER LIST OF POSTS.
     */

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);
        console.log(fetchPosts());
        fetchPosts().then(posts => {
            setPosts(posts);
            setIsLoading(false);
        })

    }, []);

    // const fetchPosts = useCallback(async() => {
    //     setIsLoading(true);
    //     try {
    //         const response = await fetch(urlBase);
    //         if(!response.ok && !response.status !== '204'){
    //             console.log('error: ' + response.status);
    //             throw new Error('Error: ' + response.status);
    //         }
    //         const data = await response.json();
    //         console.log(data);

    //         setPosts(data);

    //     } catch (error) {
            
    //     }

    //     setIsLoading(false);
    // }, []);

    // useEffect(() => {
    //     fetchPosts();
    // }, [fetchPosts]);
    

    return(
    <React.Fragment>
        <Header />
        
        <br />
        <br />

        {
            isLoading && <p>Loading...</p>
        }

        {
            !isLoading && 
            posts.map(post => {
                return (
                    <PostCardWithPics key={post.idPost} post={post} />
                );
            })
        }

        {/* <PostCardWithPics />
        <PostCardWithPics />
        <PostCardWithPics />

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}

        
    </React.Fragment>)
};

export default Homepage;