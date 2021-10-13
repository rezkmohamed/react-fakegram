import React from "react";
import classes from "./Sidebar.module.scss";
import defaultImg from "../../../../assets/no-pro-pic.png";
import searchIcon from "../../../../assets/search-icon.png";

const Sidebar = () => {
    return(
        <React.Fragment>
            <div className={classes.sidebar}>
                <div className={classes.row1}>
                    <div className={classes['sidebar-header']}>
                        <div className={classes['avatar-container']}>
                            <img src={defaultImg} alt='ASDDA'/>
                        </div>
                        <div className={classes['avatar-info']}>
                            nickname 
                        </div>
                        <div className={classes['actions-container']}></div>
                    </div>

                    <div className={classes['search-box']}>
                        <img width="20" src={searchIcon} alt='adasdasd'/>
                        <input type="text" placeholder="Cerca o inizia nuova chat" />
                    </div>
                </div>

                <div className={classes['sidebar-content']}>
                    <div className={classes.conversation}>

                        <div className={classes.picture}>
                            <img src={defaultImg} alt='asdadsad'/>
                        </div>

                        <div className={classes.content}>
                            <div className={classes['conversation-header']}>
                                <div className={classes.name}>
                                    nickname
                                </div>
                            </div>

                            <div className={classes.message}>
                                ultimo messaggio
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Sidebar;