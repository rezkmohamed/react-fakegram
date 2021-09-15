import React from "react";
import { Link } from "react-router-dom";
import NoProPic from "../../assets/no-pro-pic.png";
import SVG from 'react-inlinesvg';
import classes from './PostCardWithPics.module.scss';


const PostCardWithPics = (props) => {
    return (
        <React.Fragment>
            <div className="col-12">
                    <div className={classes.contents}>
                        <div className={classes.hidden}>
                            <SVG id="dots" viewBox="0 0 48 48">
                                <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            </SVG>

                            <SVG xmlns="http://www.w3.org/2000/svg" id="like-filled" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
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
                            </SVG>
                        </div>

                        <article className={classes.instapost}>
                            <header className={classes['instapost__header']}>
                                <Link className={classes['profile-img']} >
                                    <img src={NoProPic} alt="profile pic"/>
                                </Link>
                                <div className={classes['profile-name']}>
                                    <Link className={classes['user instalink']}>
                                        nickname
                                    </Link>
                                </div>


                            </header>
                            <section className={classes['instapost__image']}>
                                <img className={classes['img img-0 show']} src={NoProPic} alt="immagine post" />
                                <div className={classes['like-heart']}>
                                    <SVG>
                                        <use xlinkHref="#dislike" />
                                    </SVG>
                                </div>
                                <div className={classes['ctrl ctrl-left hide']}>
                                    <button>
                                        <i className={classes['fa fa-angle-left']}></i>
                                    </button>
                                </div>
                                <div className={classes['ctrl ctrl-dots']}></div>
                            </section>
                            <section className={classes['instapost__action']}>
                                <button className={classes['btn btn-like']}>
                                    <SVG className={classes['like-icon']}>
                                        <use xlinkHref="#like-filled" />
                                    </SVG>
                                    <SVG className={classes['like-icon']}>
                                        <use xlinkHref="#like" />
                                    </SVG>
                                    <SVG className={classes['dislike-icon']}>
                                        <use xlinkHref="#dislike" />
                                    </SVG>
                                </button>
                                <button className={classes['btn btn-comment']}>
                                    <SVG>
                                        <use xlinkHref="#comment" />
                                    </SVG>
                                </button>
                            </section>
                            <section className={classes['instapost__likes']}>
                                Piace a <Link  className={classes.instalink}> 450 persone</Link>
                            </section>
                            <section className={classes['instapost__description']}>
                                <Link className={classes['user instalink']}>
                                        nickname
                                    </Link> descrizione del post
                            </section>
                            <section className={classes['instapost__description']}>
                                <div>
                                    <Link clasName={classes['user instalink']}>
                                        nickname
                                    </Link>
                                    <span>commento test a caso</span> 
                                    <span style={{'padding-left': '3px', 'cursor': 'pointer'}} >(<span>
                                        <SVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                                        </SVG>
                                    </span>3)</span>
                                </div>
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
                                            className={classes['btn btn-send-comment']} 
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