import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
//import heart from '../../icons/heart.svg';
import chatIcon from '../../icons/chat-text.svg';
import plusSquare from '../../icons/plus-square.svg';
import personCircle from '../../icons/person-circle.svg';
import boxArrow from '../../icons/box-arrow-right.svg';

/**
 * FIXARE IL SUBMIT DI UN NUOVO UTENTE, INDIRIZZANDO ALLA PAGINA DI RICERCA + L'UTENTE CERCATO.
 */
const Header = () => {
    const [searchedUser, setSearchedUser] = useState('');

    const onHandleSearchUser = (event) => {
        console.log(event.target.value);
        setSearchedUser(event.target.value);
    }

    const onSubmitSearchUser = (event) => {
        if(event.key === 'Enter'){
            console.log('submitted ' + searchedUser);
        }
    }

    return (
            <div className={styles.navigation}>
                <div className={styles.logo}>
                    <Link to="/profilepage" className={styles['no-underline']} href="#">
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
                        <Link to="/" target ="_blank" className={styles['navigation-link']}>
                            <img src={chatIcon} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/" className={styles['navigation-link notifica']}>
                            <img src={plusSquare} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/profilepage" className={styles['navigation-link']}>
                            <img src={personCircle} alt="link"/>
                        </Link>
                    </div>

                    <div className={styles['navigation-icon']}>
                        <Link to="/" id="signout" className={styles['navigation-link']}>
                            <img src={boxArrow} alt="link"/>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default Header;