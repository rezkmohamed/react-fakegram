import React from "react";
import Header from '../../UI/Header';
import PostCard from "../../UI/PostCard";

const Homepage = (props) => {
    return(
    <React.Fragment>
        <Header></Header>
        <br />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

        
    </React.Fragment>)
};

export default Homepage;