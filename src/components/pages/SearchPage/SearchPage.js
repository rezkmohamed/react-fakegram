import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./SearchPage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";

const users = [
    {
        idProfile: 'a',
        name: 'pippo',
        nickname: 'pippo_nickname',
        bio: 'bio stupida',
        profilePic: "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999",
        email: 'test1@test.com',
        password: 'pass'
    },
    {
        idProfile: 'b',
        name: 'pluto',
        nickname: 'pluto_nickname',
        bio: 'bio stupida',
        profilePic: "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999",
        email: 'test2@test.com',
        password: 'pass'
    }
]



const SearchPage = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const usersSearched = [];


    const getUsersListSearched = () => {
        const nameLike = queryParams.get('like');
    
        for(let user of users){
            if(user.name.includes(nameLike)){
                usersSearched.push(user);
            }
        }
    }

    getUsersListSearched();

    return(
        <React.Fragment>
            <Header />
            <div className={`${classes.container}`}>
                <div>
                    {
                        usersSearched.map(user => {
                            return (
                                <div className={`${globalClasses.media} ${classes.media}`}>
                                <img src={user.profilePic} alt="propic" 
                                className={globalClasses['mr-3']} width="64px" height="64px" />
                                <div className={globalClasses['media-body']}>
                                    <Link 
                                        className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                        
                                    <h5 className={globalClasses['mt-0']}>{user.name}</h5>
                                    </Link>
                                    {user.bio}
                                </div>
                            </div>
                            );
                        })
                    }
                    {/* <div className={`${globalClasses.media} ${classes.media}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                        className={globalClasses['mr-3']} alt="..." width="64px" height="64px" />
                        <div className={globalClasses['media-body']}>
                            <Link 
                                className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                
                            <h5 className={globalClasses['mt-0']}>profilo.nickname</h5>
                            </Link>
                            biografia del profilo test
                        </div>
                    </div> */}

                    {/* <div className={`${globalClasses.media} ${classes.media}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                        className={globalClasses['mr-3']} alt="..." width="64px" height="64px" />
                        <div className={globalClasses['media-body']}>
                            <Link 
                                className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                
                            <h5 className={globalClasses['mt-0']}>profilo.nickname</h5>
                            </Link>
                            biografia del profilo test
                        </div>
                    </div>

                    <div className={`${globalClasses.media} ${classes.media}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                        className={globalClasses['mr-3']} alt="..." width="64px" height="64px" />
                        <div className={globalClasses['media-body']}>
                            <Link 
                                className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                
                            <h5 className={globalClasses['mt-0']}>profilo.nickname</h5>
                            </Link>
                            biografia del profilo test
                        </div>
                    </div>

                    <div className={`${globalClasses.media} ${classes.media}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                        className={globalClasses['mr-3']} alt="..." width="64px" height="64px" />
                        <div className={globalClasses['media-body']}>
                            <Link 
                                className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                
                            <h5 className={globalClasses['mt-0']}>profilo.nickname</h5>
                            </Link>
                            biografia del profilo test
                        </div>
                    </div>

                    <div className={`${globalClasses.media} ${classes.media}`}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
                        className={globalClasses['mr-3']} alt="..." width="64px" height="64px" />
                        <div className={globalClasses['media-body']}>
                            <Link 
                                className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                
                            <h5 className={globalClasses['mt-0']}>profilo.nickname</h5>
                            </Link>
                            biografia del profilo test
                        </div>
                    </div> */}

                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchPage;