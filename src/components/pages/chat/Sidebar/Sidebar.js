import React from "react";
import classes from "./Sidebar.module.scss";
import defaultImg from "../../../../assets/no-pro-pic.png";
import searchIcon from "../../../../assets/search-icon.png";


const DUMMY_CONVERSATIONS = [
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio',
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    },
    {
        img: defaultImg,
        nickname: 'nickname',
        lastMsg: 'ultimo messaggio'
    }
]

const Sidebar = ({conversations, isLoading, errorLoading}) => {
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
                    {
                        DUMMY_CONVERSATIONS.map(conversation => {
                            return (
                                <div className={classes.conversation}>

                                <div className={classes.picture}>
                                    <img src={conversation.img} alt='asdadsad'/>
                                </div>
        
                                <div className={classes.content}>
                                    <div className={classes['conversation-header']}>
                                        <div className={classes.name}>
                                            {conversation.nickname}
                                        </div>
                                    </div>
        
                                    <div className={classes.message}>
                                        {conversation.lastMsg}
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;