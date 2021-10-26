import React from "react";
import { Link } from "react-router-dom";
import NoProPic from "../../assets/no-pro-pic.png";
// import SVG from 'react-inlinesvg';
import classes from './PostCardWithPics.module.scss';
import globalClasses from '../../assets/global-styles/bootstrap.min.module.css';
import heartIcon from "../../icons/heart.svg";
import heartIconFilled from "../../icons/heart-filled.svg";
import commentIcon from "../../icons/chat.svg";
import { useEffect, useState } from "react/cjs/react.development";
import * as moment from "moment";
import { checkIsLiked, addLikePost, deleteLikePost } from "../../services/like-service";
import { addComment, fetchCommentsForPost } from "../../services/comment-service";


const PostCardWithPics = ({post}) => {
    const [likeBtnDisabled, setLikeBtnDisabled] = useState(false);
    // const [isCheckingLike, setIsCheckingLike] = useState(true);
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    post.date = moment(new Date(post.date)).format("MM-DD-YYYY, h:mm:ss a");

    const commentInputHandler = (event) => {
        setCommentInput(event.target.value);
    }

    const onAddComment = (comment) =>{
        const nicknameProfileLogged = localStorage.getItem('nickname');
        setComments([
            ...comments, {nickname: nicknameProfileLogged, comment: comment}
        ]);

        addComment(comment, post.idPost).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });

        setCommentInput('');
    }

    useEffect(() => {
        // setIsCheckingLike(true);
        setIsLoadingComments(true);
        fetchCommentsForPost(post.idPost)
        .then(response => {
            console.log(response);
            setComments(response);
            setIsLoadingComments(false);
        }).catch(err => {
            console.log(err);
            setIsLoadingComments(false);
        });

        checkIsLiked(post.idPost).then(response => {
            if(response){
                setLiked(true);
            } else {
                setLiked(false);
            }
            // setIsCheckingLike(false);
        }).catch(err => {
            console.log(err);
            // setIsCheckingLike(false);
        });
    }, [post]);

    const onToggleLike = () => {
        setLikeBtnDisabled(true);
        if(!liked){
            addLikePost(post.idPost).then(response => {
                setLiked(true);
                post.likesCounter++;
                setLikeBtnDisabled(false);
            }).catch(err => {
                console.log(err);
                setLikeBtnDisabled(false);
            });
        }
        else {
            deleteLikePost(post.idPost).then(response => {
                setLiked(false);
                post.likesCounter--;
                setLikeBtnDisabled(false);
            }).catch(err => {
                console.log(err);
                setLikeBtnDisabled(false);
            });
        }
    }

    return (
        <React.Fragment>
            <div className={globalClasses['col-12']}>
                    <div className={classes.contents}>
                        <div className={classes.hidden}>
                            {/* <SVG id="dots" viewBox="0 0 48 48">
                                <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                                <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                            </SVG> */}
                        </div>

                        <article className={classes.instapost}>
                            <header className={classes['instapost__header']}>
                                <Link to={`/profiles/${post.profile.id}`} className={classes['profile-img']} >
                                    <img src={post.profile.proPic} alt="profile pic"/>
                                </Link>
                                <div className={classes['profile-name']}>
                                    <Link to={`/profiles/${post.profile.id}`} className={`${classes.user} ${classes.instalink}`}>
                                        {post.profile.nickname}
                                    </Link>
                                </div>


                            </header>
                            <section className={classes['instapost__image']}>
                                <img className={`${classes.img} ${classes['img-0']} ${classes.show}`} src={post.img} alt="immagine post" />
                                <div className={classes['like-heart']}>
                                    {/* <SVG>
                                        <use xlinkHref="#dislike" />
                                    </SVG> */}
                                </div>
                                <div className={`${classes.ctrl} ${classes['ctrl-left']} ${classes.hide}`}>
                                    <button>
                                        <i className='fa fa-angle-left'></i>
                                    </button>
                                </div>
                                <div className={`${classes.ctrl} ${classes['ctrl-dots']}`}></div>
                            </section>
                            <section className={classes['instapost__action']}>
                                <button disabled={likeBtnDisabled} className={`${classes.btn} ${classes['btn-like']}`} onClick={onToggleLike}>
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
                                Piace a <Link to={`likes/?id-post=${post.idPost}`}  className={classes.instalink}> {post.likesCounter} persone</Link>
                            </section>
                            <section className={classes['instapost__description']}>
                                <Link to={`/profiles/${post.profile.id}`} className={`${classes.user} ${classes.instalink}`}>
                                        {post.profile.nickname}
                                    </Link> {post.description}
                            </section>
                            {
                                !isLoadingComments && 
                                <section className={classes['instapost__description']}>
                                {comments.map(comment => {
                                    return (
                                        <div key={comment.idComment}>
                                            <Link to={`/profiles/${comment.idProfile}`} 
                                            className={`${classes.user} ${classes.instalink}`}>
                                            {comment.nicknameProfile}
                                            </Link> {comment.comment}
                                        </div>
                                    )
                                })}
                            </section>
                            }
                            <section className={classes['instapost__timestamp']}>
                                {post.date}
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