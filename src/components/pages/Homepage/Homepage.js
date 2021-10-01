import React, { useState, useEffect} from "react";
import Header from '../../UI/Header';
import PostCardWithPics from "../../UI/PostCardWithPics";
import { fetchPosts } from "../../../services/post-service";

const Homepage = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        setIsLoading(true);
        fetchPosts().then(posts => {
            setPosts(posts);
            setIsLoading(false);
        });
    }, []);

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
    </React.Fragment>)
};

export default Homepage;