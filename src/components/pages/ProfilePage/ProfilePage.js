import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import classes from "./ProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";
import { fetchProfileById, fetchProfileLogged } from "../../../services/profile-service";
import { fetchPostsByIdProfile } from "../../../services/post-service";
import { addFollow, checkIsFollowed, deleteFollow } from "../../../services/follow-service";
import { addNewConversation } from "../../../services/message-conversation-service";
import galleryIcon from "../../../icons/images.svg";
import questionsIcon from "../../../icons/patch-question.svg";
import QuestionCard from "../../UI/QuestionCard";
import { fetchQuestionsForProfile } from "../../../services/question-service";
import QuestionInput from "../../UI/QuestionInput";

const MY_PROFILE_PATH = "/profiles/me";

const GALLERY_TYPE = "gallery";
const QUESTIONS_TYPE = "questions";

const ProfilePage = () => {
    const history = useHistory();
    const location = useLocation();
    let isMyProfile;
    let startingIndex;
    let idProfile;
    let idLogged = localStorage.getItem('id');
    if(location.pathname === MY_PROFILE_PATH){
        isMyProfile = true;
    } else {
        startingIndex = location.pathname.lastIndexOf('/');
        idProfile = location.pathname.substring(startingIndex+1, location.pathname.length);
        if(idProfile === idLogged){
            isMyProfile = true;
        } else {
            isMyProfile = false;
        }
    }
    const [isLoadingProfile, setIsLoadingProfile] = useState(true);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
    
    const [posts, setPosts] = useState([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);

    const [followButtonDisabled, setFollowButtonDisabled] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);

    const [displayGallery, setDisplayGallery] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [firstClickOnQuestionsBtn, setFirstClickOnQuestionsBtn] = useState(true);

    useEffect(() => {
        setIsLoadingProfile(true);
        setIsLoadingPosts(true);
        setError(null);
        console.log(isMyProfile);

        if(!isMyProfile){
            fetchProfileById(idProfile)
            .then(profile => {
                setProfile(profile);
                setIsLoadingProfile(false);
            })
            .catch(err => {
                setError("Error");
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
    
            checkIsFollowed(idProfile)
            .then(response => {
                if(response){
                    setIsFollowed(true);
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            fetchProfileLogged().then(res => {
                setProfile(res);
                setIsLoadingProfile(false);
                setPosts(res.posts);
                setIsLoadingPosts(false);
            }).catch(err => {
                setIsLoadingProfile(false);
                setIsLoadingPosts(false);
            })
        }
    }, [idProfile, isMyProfile]);

    const followThisProfile = () => {
        addFollow(idProfile)
        .then(isOkay => {
            if(isOkay){
                setFollowButtonDisabled(false);
                profile.followersCounter++;
                setIsFollowed(true);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    const unfollowThisProfile = () => {
        deleteFollow(idProfile)
        .then(isOkay => {
            if(isOkay){
                setFollowButtonDisabled(false);
                profile.followersCounter--;
                setIsFollowed(false);
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    const toggleFollow = () => {
        setFollowButtonDisabled(true);
        if(isFollowed){
            unfollowThisProfile();
        } else {
            followThisProfile();
        }
    };

    const goToPosts = () => {
        document.getElementById("post-list").scrollIntoView({behavior: 'smooth'});
    }

    const onStartConversation = () => {
        addNewConversation(idProfile)
        .then(res => {
            console.log(res);
            if(res){
                history.push("/chat");
            }
        }).catch(err => {
            window.alert('Errore: ' + err.message + " riprova più tardi");
        });
    };

    const getAnsweredQuestions = () => {
        fetchQuestionsForProfile(idProfile)
        .then(res => {
            console.log(res);
            setQuestions(res);
        }).catch(err => {
            console.log(err);
        });
    }   

    const changeViewType = (type) => {
        if(type === GALLERY_TYPE){
            setDisplayGallery(true);
        } else if(type === QUESTIONS_TYPE) {
            if(firstClickOnQuestionsBtn){
                setFirstClickOnQuestionsBtn(false);
                getAnsweredQuestions();
            }
            setDisplayGallery(false);
        } else {
            window.alert('ERRRORE!!! NON SIAMO RIUSCITI!!!');
        }
    };

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
            
                    <img src={profile.proPic} alt="" style={{'width': '180px', 'height': '180px'}} />
        
            
                </div>
            
                <div className={classes['profile-user-settings']}>
            
                    <h1 className={classes['profile-user-name']}>{profile.nickname}</h1>
            
                    {
                        !isMyProfile &&
                        <button className={classes['profile-edit-btn']} style={{'backgroundColor': 'white'}} onClick={toggleFollow} disabled={followButtonDisabled}>{isFollowed ? 'followed' : 'follow'}</button>
                    }
                    {
                        !isMyProfile && 
                        <button className={classes['profile-edit-btn']} style={{'backgroundColor': 'white'}} onClick={onStartConversation}>messaggio</button>

                    }
                    {
                        isMyProfile &&
                        <button className={classes['profile-edit-btn']} style={{'backgroundColor': 'white'}}><Link to="/update" style={{ color: 'inherit', textDecoration: 'inherit' }}> modifica</Link></button>        
                    }
                </div>
            
                <div className={classes['profile-stats']}>
            
                    <ul>
                    <li onClick={goToPosts}><span className={classes['profile-stat-count']}>{profile.postsCounter}</span> posts</li>
                    <li>
                        <Link to={`/followlist?id-profile=${profile.id}&follow-type=followers`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <span className={classes['profile-stat-count']}>{profile.followersCounter}</span> followers
                        </Link>
                    </li>
                    <li>
                        <Link to={`/followlist?id-profile=${profile.id}&follow-type=following`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <span className={classes['profile-stat-count']}>{profile.followingCounter}</span> following
                        </Link>
                    </li>
                    </ul>
                </div>
                <div className={classes['profile-bio']}>
                    <span className={classes['profile-real-name']}>{profile.name}</span><p>{profile.bio}</p>
                </div>
            </div>
        }
        </div>
        <div className={classes['selector-type']}>
            <img className={classes.icons} onClick={() => changeViewType(GALLERY_TYPE)} src={galleryIcon} alt="gallery-icon"/>
            <img className={classes.icons} onClick={() => changeViewType(QUESTIONS_TYPE)} src={questionsIcon} alt="questions-icon" />
        </div>
        <hr />
        {
            !displayGallery && 
            !isMyProfile &&
            <QuestionInput idProfileReciver={idProfile} idProfileSender={idLogged} />
        }
        <section id="post-list" className={classes['post-list']}>
            {
                isLoadingPosts && <p>Loading posts...</p>
            }
            {
                !isLoadingPosts && 
                displayGallery &&
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
        {
            !displayGallery &&
            questions.map(q => {
                return (
                    <QuestionCard key={q.idQuestion} question={q}/>
                )
            })
        } 

    </React.Fragment>
    );
}

export default ProfilePage;