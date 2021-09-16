import React from "react";
import Header from '../../UI/Header';
import PostCard from "../../UI/PostCard";
import PostCardWithPics from "../../UI/PostCardWithPics";

const Homepage = (props) => {
    return(
    <React.Fragment>
        <br />
        <br />

        <PostCardWithPics />
        <PostCardWithPics />
        <PostCardWithPics />

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

        
    </React.Fragment>)
};

export default Homepage;