import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Header.module.scss";
//import heart from '../../icons/heart.svg';
import chatIcon from '../../icons/chat-text.svg';
import plusSquare from '../../icons/plus-square.svg';
import personCircle from '../../icons/person-circle.svg';
import boxArrow from '../../icons/box-arrow-right.svg';
import houseDoor from '../../icons/house-door.svg';
import AuthContext from "../../services/auth-context";


const Header = () => {
    const [searchedUser, setSearchedUser] = useState('');
    const history = useHistory('');
    const authCtx = useContext(AuthContext);

    const onHandleSearchUser = (event) => {
        console.log(event.target.value);
        setSearchedUser(event.target.value);
    }

    const onSubmitSearchUser = (event) => {
        if(event.key === 'Enter'){
            console.log('submitted ' + searchedUser);
            history.push(`/searchprofile?like=${searchedUser}`);
        }
    }

    const onHandleLogout = () => {
        authCtx.logout();
        history.replace('/login');
    }

    return (
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <Link to="/" className={styles['no-underline']}>
                    FakeGram
                    </Link>
                </div>
                <div className={styles['navigation-search-container']}>
                    <i className={styles['fa fa-search']}></i>
                    <input className={styles['search-field']} value={searchedUser} onChange={onHandleSearchUser} onKeyDown={onSubmitSearchUser} type="text" placeholder="Search" />
                    <div className={styles['search-container']}>
                    <div className={styles['search-container-box']}>
                        <div className={styles['search-results']}>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles['navigation-icons']}>
                    <div className={styles['navigation-icon']}>
                        <Link to="/" className={styles['navigation-link']}>
                            <img src={houseDoor} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/chat" className={styles['navigation-link']}>
                            <img src={chatIcon} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/newpost" className={styles['navigation-link notifica']}>
                            <img src={plusSquare} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/profiles/me" className={styles['navigation-link']}>
                            <img src={personCircle} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/login" id="signout" onClick={onHandleLogout} className={styles['navigation-link']}>
                            <img src={boxArrow} alt="link"/>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default Header;