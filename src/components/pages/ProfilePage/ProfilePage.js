import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./ProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";
import { fetchProfileById } from "../../../services/profile-service";
import { fetchPostsByIdProfile } from "../../../services/post-service";
import { addFollow } from "../../../services/follow-service";

const ProfilePage = () => {
    const location = useLocation();
    const startingIndex = location.pathname.lastIndexOf('/');
    const idProfile = location.pathname.substring(startingIndex+1, location.pathname.length);

    const [isLoadingProfile, setIsLoadingProfile] = useState(true);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    
    const [posts, setPosts] = useState([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);

    const [followButtonDisabled, setFollowButtonDisabled] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);

    useEffect(() => {
        setIsLoadingProfile(true);
        setIsLoadingPosts(true);
        setError(null);

        fetchProfileById(idProfile)
        .then(profile => {
            setProfile(profile);
            console.log(profile);
            setIsLoadingProfile(false);
        })
        .catch(err => {
            setError("Error");
            console.log(err);
            setIsLoadingProfile(false);
        });

        fetchPostsByIdProfile(idProfile)
        .then(postsResponse => {
            setPosts(postsResponse);
            console.log(postsResponse);
            setIsLoadingPosts(false);
        })
        .catch(err => {
            setError("Error");
            setIsLoadingPosts(false);
        });
    }, [idProfile]);

    const toggleFollow = () => {
        setFollowButtonDisabled(true);
        addFollow('b', idProfile)
        .then(isOkay => {
            if(isOkay){
                setFollowButtonDisabled(false);
                setIsFollowed(!isFollowed);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
    <React.Fragment>
        <Header />
        <div className={globalClasses.container}>
        {
            error && <h1>{error}</h1>
        }
        {
            isLoadingProfile && 'Loading...'
        }

        {            
            !isLoadingProfile &&
            !error &&
            <div className={classes.profile}>
        
                <div className={classes['profile-image']}>
            
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" style={{'width': '180px', 'height': '180px'}} />
        
            
                </div>
            
                <div className={classes['profile-user-settings']}>
            
                    <h1 className={classes['profile-user-name']}>{profile.nickname}</h1>
            
                    <button className={classes['profile-edit-btn']} style={{'backgroundColor': 'white'}} onClick={toggleFollow} disabled={followButtonDisabled}>{isFollowed ? 'followed' : 'follow'}</button>

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
                            <img src={post.img} alt="" />
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