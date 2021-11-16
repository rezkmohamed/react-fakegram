import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./SearchPage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";
import { fetchProfilesToSearchByName } from "../../../services/profile-service";

const SearchPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nameLike = queryParams.get('like');

    const [usersSearched, setUsersSearched] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {   
        setIsLoading(true);
        setError(null);

        fetchProfilesToSearchByName(nameLike)
        .then(profiles => {
            setUsersSearched(profiles);
            console.log(profiles);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });
    }, [nameLike]);

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
                        usersSearched.map(user => {
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

export default SearchPage;