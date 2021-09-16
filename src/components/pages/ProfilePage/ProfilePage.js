import React from "react";
//import { Link } from "react-router-dom";
import classes from "./ProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";



const ProfilePage = (props) => {
    return (
            <div className={globalClasses.container}>

            <div className={classes.profile}>
        
            <div className={classes['profile-image']}>
        
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" style={{'width': '180px', 'height': '180px'}} />
    
        
            </div>
        
            <div className={classes['profile-user-settings']}>
        
                <h1 className={classes['profile-user-name']}>nickname.test</h1>
        
                <button className={classes['profile-edit-btn']} style={{'background-color': 'white'}}>follow</button>

                <button className={classes['profile-edit-btn']} style={{'background-color': 'white'}}>modifica</button>        
            </div>
        
            <div className={classes['profile-stats']}>
        
                <ul>
                <li><span className={classes['profile-stat-count']}>164</span> posts</li>
                <li><span className={classes['profile-stat-count']}>50</span> followers</li>
                <li><span className={classes['profile-stat-count']}>150</span> following</li>
                </ul>
            </div>
            <div className={classes['profile-bio']}>
                <span className={classes['profile-real-name']}>profilo.nome</span><p>bio stupida scema e quant'altro 📷✈️🏕️</p>
            </div>
            </div>
        </div>
    );
}

export default ProfilePage;