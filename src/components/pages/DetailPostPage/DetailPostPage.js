import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "../../UI/Header";
import PostCardWithPics from "../../UI/PostCardWithPics";
import classes from "./DetailPostPage.module.scss";
import { fetchPostById } from "../../../services/post-service";

const DetailPostPage = () => {
    const location = useLocation();
    const startingIndex = location.pathname.lastIndexOf('/');
    const idPost = location.pathname.substring(startingIndex+1, location.pathname.length);
    const [isLoading, setIsloading] = useState(true);
    const [post, setPost] = useState(null);

    useEffect(() => {
        setIsloading(true);
        fetchPostById(idPost).then(post => {
            console.log(post);
            setPost(post);
            setIsloading(false);
        }).catch(err => console.log(err));
    }, [idPost]);

    return(
        <React.Fragment>
            <Header />
            <div className={classes.content}>
                { isLoading && <p>Loading...</p>}
                {
                    !isLoading &&
                    <PostCardWithPics key={post.idPost} post={post}/>
                }
            </div>
        </React.Fragment>
    )
}

export default DetailPostPage;