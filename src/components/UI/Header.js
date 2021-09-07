import React from "react";
import styles from "./Header.module.scss";
import heart from '../../icons/heart.svg';
import chatIcon from '../../icons/chat-text.svg';
import plusSquare from '../../icons/plus-square.svg';
import personCircle from '../../icons/person-circle.svg';
import boxArrow from '../../icons/box-arrow-right.svg';

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['inner-wrapper']}>
                <div className={styles.navbar__logo}>
                    <p>fakeGram</p>
                </div>

                <form >
                    <div className={styles['search-box-wrapper']}>
                    <input 
                            type="text" 
                            className={styles['search-box center']}
                            placeholder="Cerca"
                            name="search" />
                    <i className={styles['fa fa-search search-box-icon']}></i>
                    </div>
                </form>

                <ul className={styles['main-nav']}>
                    
                    <li className={styles['main-nav__nav-link']}>
                    <img src={heart} alt="hear icon" />
                    </li>

                    <li className={styles['main-nav__nav-link main-nav__nav-link--notification']}>
                    <img src={chatIcon} alt="chat icon" />
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src={plusSquare} alt="plus square"/>
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src={personCircle} alt="person circle" />    
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src={boxArrow} alt="box arrow" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;