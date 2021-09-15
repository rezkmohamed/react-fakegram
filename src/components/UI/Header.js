import React from "react";
import styles from "./Header.module.scss";
import heart from '../../icons/heart.svg';
import chatIcon from '../../icons/chat-text.svg';
import plusSquare from '../../icons/plus-square.svg';
import personCircle from '../../icons/person-circle.svg';
import boxArrow from '../../icons/box-arrow-right.svg';

const Header = () => {
    return (
            <div className={styles.navigation}>
            <div className={styles.logo}>
                <a className={styles['no-underline']} href="#">
                FakeGram
                </a>
            </div>
            <div className={styles['navigation-search-container']}>
                <i className={styles['fa fa-search']}></i>
                <input className={styles['search-field']} type="text" placeholder="Search" />
                <div className={styles['search-container']}>
                <div className={styles['search-container-box']}>
                    <div className={styles['search-results']}>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles['navigation-icons']}>
                <a target ="_blank" className={styles['navigation-link']}>
                <img src={heart}/>
                </a>
                <a className={styles['navigation-link notifica']}>
                    <img src={heart}/>
                </a>
                <a className={styles['navigation-link']}>
                <img src={heart} />
                </a>
                <a id="signout" className={styles['navigation-link']}>
                <img src={heart}/>
                </a>
            </div>
            </div>

    );
}

export default Header;