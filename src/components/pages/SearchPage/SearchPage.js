import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./SearchPage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";

const DEFAULT_IMG = "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999";


const SearchPage = (props) => {
    const urlBase = 'http://localhost:8080/profiles/search/';
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nameLike = queryParams.get('like');

    const [usersSearched, setUsersSearched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const getUsersListSearched = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        console.log('fetching...');

        try {
            const response = await fetch(urlBase + nameLike);
            if(!response.ok && !response.status !== '204'){
                console.log('error: ' + response.status);
                throw new Error('Error: ' + response.status);
            }
            const data = await response.json();
            console.log(data);

            const transformedData = data.map(profileData => {
                return {
                    idProfile: profileData.id,
                    name: profileData.name,
                    nickname: profileData.nickname,
                    bio: profileData.bio,
                    profilePic: !profileData.proPic ? DEFAULT_IMG : profileData.proPic,
                    email: profileData.email
                };
            });

            setUsersSearched(transformedData);
            console.log(transformedData);
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        };

        setIsLoading(false);
    }, [nameLike]);

    useEffect(() => {
        getUsersListSearched();
    }, [getUsersListSearched]);


    return(
        <React.Fragment>
            <Header />
            <div className={`${classes.container}`}>
                <div>
                    {
                        error && !isLoading && 'Errro: ' + error.message
                    }
                    {
                        isLoading && 'Loading...'
                    }
                    {
                        !isLoading &&
                        usersSearched.map(user => {
                            return (
                                <div className={`${globalClasses.media} ${classes.media}`}>
                                <img src={user.profilePic} alt="propic" 
                                className={globalClasses['mr-3']} width="64px" height="64px" />
                                <div className={globalClasses['media-body']}>
                                    <Link to={`/profiles/${user.idProfile}`}
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

export default SearchPage;