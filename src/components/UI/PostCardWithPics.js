import React from "react";
import { Link } from "react-router-dom";
import NoProPic from "../../assets/no-pro-pic.png";
import SVG from 'react-inlinesvg';
import classes from './PostCardWithPics.module.scss';
import globalClasses from '../../assets/global-styles/bootstrap.min.module.css';
import heartIcon from "../../icons/heart.svg";
import heartIconFilled from "../../icons/heart-filled.svg";
import commentIcon from "../../icons/chat.svg";
import { useState } from "react/cjs/react.development";


const PostCardWithPics = ({post}) => {
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    const commentInputHandler = (event) => {
        setCommentInput(event.target.value);
    }

    const onAddComment = (comment) =>{
        setComments([
            ...comments, {nickname: 'nickname', comment: comment}
        ])
        setCommentInput('');
    }

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
                                <img className={`${classes.img} ${classes['img-0']} ${classes.show}`} src={post.urlImg} alt="immagine post" />
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
                                <button className={`${classes.btn} ${classes['btn-like']}`} onClick={() => setLiked(!liked)}>
                                    { 
                                        liked ? 
                                            <img src={heartIconFilled} id="like" alt="like icon"/> 
                                            :
                                            <img src={heartIcon} id="like" alt="like icon"/>
                                    }
                                </button>

                                <button className={`${classes.btn} ${classes['btn-comment']}`}>
                                    <img src={commentIcon} alt="comment icon"/>
                                </button>
                            </section>
                            <section className={classes['instapost__likes']}>
                                Piace a <Link  className={classes.instalink}> 450 persone</Link>
                            </section>
                            <section className={classes['instapost__description']}>
                                <Link className={`${classes.user} ${classes.instalink}`}>
                                        nickname
                                    </Link> {post.description}
                            </section>
                            <section className={classes['instapost__description']}>
                                {comments.map(comment => {
                                    return (
                                        <div>
                                            <Link className={`${classes.user} ${classes.instalink}`}>
                                            {comment.nickname}
                                            </Link> {comment.comment}
                                                </div>
                                    )
                                })}
                            </section>
                            <section className={classes['instapost__timestamp']}>
                                31/03/1999
                            </section>
                            <section className={classes['instapost__add-comment']}>

                                <textarea 
                                            id="id"
                                            className={classes['comment-input']}
                                            placeholder="Aggiungi un commento" 
                                            value={commentInput}
                                            onChange={commentInputHandler}
                                            rows="1">
                                </textarea>
                                <button 
                                            className={`${classes.btn} ${classes['btn-send-comment']}`} 
                                            onClick={() => onAddComment(commentInput)}
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