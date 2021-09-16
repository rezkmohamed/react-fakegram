import React from "react";
import { Link } from "react-router-dom";
import NoProPic from "../../assets/no-pro-pic.png";
import SVG from 'react-inlinesvg';
import classes from './PostCardWithPics.module.scss';
import globalClasses from '../../assets/global-styles/bootstrap.min.module.css';
import heartIcon from "../../icons/heart.svg";
import commentIcon from "../../icons/chat.svg";


const PostCardWithPics = (props) => {
    return (
        <React.Fragment>
            <div className={globalClasses['col-12']}>
                    <div className={classes.contents}>
                        <div className={classes.hidden}>
                            <SVG id="dots" viewBox="0 0 48 48">
                                <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            </SVG>

                            {/* <SVG xmlns="http://www.w3.org/2000/svg" id="like-filled" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </SVG>

                            <SVG id="like" viewBox="0 0 48 48">
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </SVG>
                        
                            <SVG id="dislike" viewBox="0 0 48 48">
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </SVG>
                            <SVG id="comment" viewBox="0 0 48 48">
                                <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                            </SVG>
                        
                            <SVG id="send" viewBox="0 0 48 48">
                                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                            </SVG>
                        
                            <SVG id="save" viewBox="0 0 48 48">
                                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                            </SVG>
                        
                            <SVG id="smiley" viewBox="0 0 48 48">
                                <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                                <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                            </SVG> */}
                        </div>

                        <article className={classes.instapost}>
                            <header className={classes['instapost__header']}>
                                <Link className={classes['profile-img']} >
                                    <img src={NoProPic} alt="profile pic"/>
                                </Link>
                                <div className={classes['profile-name']}>
                                    <Link className={`${classes.user} ${classes.instalink}`}>
                                        nickname
                                    </Link>
                                </div>


                            </header>
                            <section className={classes['instapost__image']}>
                                <img className={`${classes.img} ${classes['img-0']} ${classes.show}`} src={NoProPic} alt="immagine post" />
                                <div className={classes['like-heart']}>
                                    <SVG>
                                        <use xlinkHref="#dislike" />
                                    </SVG>
                                </div>
                                <div className={`${classes.ctrl} ${classes['ctrl-left']} ${classes.hide}`}>
                                    <button>
                                        <i className='fa fa-angle-left'></i>
                                    </button>
                                </div>
                                <div className={`${classes.ctrl} ${classes['ctrl-dots']}`}></div>
                            </section>
                            <section className={classes['instapost__action']}>
                                <button className={`${classes.btn} ${classes['btn-like']}`}>
                                    {/* <SVG className={classes['like-icon']}>
                                        <use xlinkHref="#like-filled" />
                                    </SVG>
                                    <SVG className={classes['like-icon']}>
                                        <use xlinkHref="#like" />
                                    </SVG>
                                    <SVG className={classes['dislike-icon']}>
                                        <use xlinkHref="#dislike" />
                                    </SVG> */}
                                    <img src={heartIcon} id="like" alt="like icon"/>
                                </button>
                                <button className={`${classes.btn} ${classes['btn-comment']}`}>
                                    <img src={commentIcon} alt="comment icon"/>
                                    {/* <SVG>
                                        <use xlinkHref="#comment" />
                                    </SVG> */}
                                </button>
                            </section>
                            <section className={classes['instapost__likes']}>
                                Piace a <Link  className={classes.instalink}> 450 persone</Link>
                            </section>
                            <section className={classes['instapost__description']}>
                                <Link className={`${classes.user} ${classes.instalink}`}>
                                        nickname
                                    </Link> descrizione del post
                            </section>
                            <section className={classes['instapost__description']}>
                                <Link className={`${classes.user} ${classes.instalink}`}>
                                        nickname
                                    </Link> commento test a caso
                            </section>
                            <section className={classes['instapost__timestamp']}>
                                31/03/1999
                            </section>
                            <section className={classes['instapost__add-comment']}>

                                <textarea 
                                            id="id"
                                            className={classes['comment-input']}
                                            placeholder="Aggiungi un commento" 
                                            rows="1">
                                </textarea>
                                <button 
                                            className={`${classes.btn} ${classes['btn-send-comment']}`} 
                                            type="submit">
                                    Invia
                                </button>
                            </section>
                        </article>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default PostCardWithPics;