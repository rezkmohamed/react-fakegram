import React from "react";
import styles from "./Header.module.scss";


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
                    <img src="../../../assets/icons/house-door.svg" />
                    </li>

                    <li className={styles['main-nav__nav-link main-nav__nav-link--notification']}>
                    <img src="../../../assets/icons/chat-text.svg" />
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src="../../../assets/icons/plus-square.svg" />
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src="../../../assets/icons/bell.svg" />
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src="../../../assets/icons/bell-fill.svg" />
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src="../../../assets/icons/person-circle.svg" />    
                    </li>

                    <li className={styles['main-nav__nav-link']}>
                    <img src="../../../assets/icons/box-arrow-right.svg" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;