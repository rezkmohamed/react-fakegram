import React from "react";
import { Link } from "react-router-dom";
import classes from "./SearchPage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";


const SearchPage = (props) => {
    return(
        <React.Fragment>
            <Header />
            <div className={`${classes.container}`}>
                <div>
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

                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchPage;