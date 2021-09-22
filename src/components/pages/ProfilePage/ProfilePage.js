import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import Header from "../../UI/Header";



const ProfilePage = (props) => {
    return (
    <React.Fragment>
        <Header />
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


        <section className={classes['post-list']}>
            
            <Link  className={classes.post}>
            <figure className={classes['post-image']}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
            </figure>
            <div className={classes['post-overlay']}>
            </div>
            </Link>
        
        
            <Link className={classes['post']}>
                <figure className={classes['post-image']}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                </figure>
                <div className={classes['post-overlay']}>
                </div>
            </Link>
        
        
            <Link className={classes['post']}>
                <figure className={classes['post-image']}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                </figure>
                <div className={classes['post-overlay']}>
                </div>
            </Link>
        
        
            <Link className={classes['post']}>
                <figure className={classes['post-image']}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="" />
                </figure>
                <div className={classes['post-overlay']}>
                </div>
            </Link>

        
        </section>



    </React.Fragment>
    );
}

export default ProfilePage;