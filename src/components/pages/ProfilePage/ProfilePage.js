import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./ProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";

const urlBase = 'http://localhost:8080/profiles/';
// const DEFAULT_IMG = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999";





const ProfilePage = (props) => {
    /**
     * getting idProfile from url
     */
    const location = useLocation();
    const startingIndex = location.pathname.lastIndexOf('/');
    const idProfile = location.pathname.substring(startingIndex+1, location.pathname.length);

    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);


    
    const getProfile = useCallback(async () => {
        setIsLoading(true);
        setProfile(null);
        setError(null);


        console.log('fetching...');
        try {
            const response = await fetch(urlBase + idProfile);
            if(!response.ok && !response.status !== '204'){
                console.log('error: ' + response.status);
                throw new Error('Error: ' + response.status);
            }
            const data = await response.json();
            console.log(data);
            setProfile(data);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }

        setIsLoading(false);
    }, [idProfile]);

    const [posts, setPosts] = useState([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const urlFetchPosts = 'http://localhost:8080/posts/profile/' + idProfile;
    const getPostsGallery = useCallback(async () => {
        setIsLoadingPosts(true);

        try {
            const response = await fetch(urlFetchPosts);
            if(!response.ok && !response.status !== '204'){
                console.log('error: ' + response.status);
                throw new Error('Error: ' + response.status);
            }
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            
        }

        setIsLoadingPosts(false);
    }, [urlFetchPosts]);

    useEffect(() => {
        getProfile();
        getPostsGallery();
    }, [getProfile, getPostsGallery]);


    return (
    <React.Fragment>
        <Header />
        <div className={globalClasses.container}>

        {
            isLoading && 'Loading...'
        }

        {            
            !isLoading &&
            !error &&
            <div className={classes.profile}>
        
                <div className={classes['profile-image']}>
            
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" style={{'width': '180px', 'height': '180px'}} />
        
            
                </div>
            
                <div className={classes['profile-user-settings']}>
            
                    <h1 className={classes['profile-user-name']}>{profile.nickname}</h1>
            
                    <button className={classes['profile-edit-btn']} style={{'backgroundColor': 'white'}}>follow</button>

                    {/* <button className={classes['profile-edit-btn']} style={{'background-color': 'white'}}>modifica</button>         */}
                </div>
            
                <div className={classes['profile-stats']}>
            
                    <ul>
                    <li><span className={classes['profile-stat-count']}>{profile.postsCounter}</span> posts</li>
                    <li><span className={classes['profile-stat-count']}>{profile.followersCounter}</span> followers</li>
                    <li><span className={classes['profile-stat-count']}>{profile.followingCounter}</span> following</li>
                    </ul>
                </div>
                <div className={classes['profile-bio']}>
                    <span className={classes['profile-real-name']}>{profile.name}</span><p>{profile.bio}</p>
                </div>
            </div>
        }
        </div>
        
        <hr />

        <section className={classes['post-list']}>
            {
                isLoadingPosts && <p>Loading posts...</p>
            }
            {
                !isLoadingPosts && 
                posts.map(post => {
                    return(
                        <Link key={post.idPost} to={`/posts/detail/${post.idPost}`} className={classes.post}>
                        <figure className={classes['post-image']}>
                            <img src={post.urlImg} alt="" />
                        </figure>
                        <div className={classes['post-overlay']}>
                        </div>
                    </Link>    
                    );
                })
            }        
        </section>
    </React.Fragment>
    );
}

export default ProfilePage;