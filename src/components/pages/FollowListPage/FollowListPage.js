import React, { useEffect, useState } from "react";
import Header from "../../UI/Header";
import classes from './FollowListPage.module.css';
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import { Link, useLocation } from "react-router-dom";
import { fetchFollowersForProfile, fetchFollowingForProfile } from "../../../services/profile-service";

const FollowListPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idProfile = queryParams.get('id-profile');
    const followingType = queryParams.get('follow-type'); //followers or following

    const [profilesFollow, setProfilesFollow] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setIsLoading(true);
        setError(null);

        if(followingType === 'followers'){
            fetchFollowersForProfile(idProfile)
            .then(profiles => {
                setProfilesFollow(profiles);
                setIsLoading(false);
            }).catch(err => {
                setError(err.message);
                setIsLoading(false);    
            });
        } else if(followingType === 'following'){
            fetchFollowingForProfile(idProfile)
            .then(profiles => {
                setProfilesFollow(profiles);
                setIsLoading(false);
            }).catch(err => {
                setError(err.message);
                setIsLoading(false);    
            });
        } else {
            setError('WRONG PATH.')
        }
    }, [idProfile, followingType]);


    return(
        <React.Fragment>
            <Header />
            <div className={`${classes.container}`}>
                <div>
                    {
                        error && !isLoading && 'Error: ' + error.message
                    }
                    {
                        isLoading && 'Loading...'
                    }
                    {
                        !isLoading &&
                        profilesFollow.map(user => {
                            return (
                                <div key={user.id} className={`${globalClasses.media} ${classes.media}`}>
                                <img src={user.proPic} alt="propic" 
                                className={globalClasses['mr-3']} width="64px" height="64px" />
                                <div className={globalClasses['media-body']}>
                                    <Link to={`/profiles/${user.id}`}
                                        className={`${classes['username-link']} ${globalClasses['username-link']}`}>
                                        
                                    <h5 className={globalClasses['mt-0']}>{user.name}</h5>
                                    </Link>
                                    {user.bio}
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default FollowListPage;