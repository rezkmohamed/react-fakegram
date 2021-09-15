import React from "react";
import styles from "./PostCard.module.css";
import NoProPic from '../../assets/no-pro-pic.png';

const PostCard = (props) => {
    return (
        <div>
                <div className={styles["instagram-card"]}>
                    <div className={styles["instagram-card-header"]}>
                    <img src={NoProPic} className={styles["instagram-card-user-image"]} alt=""/>
                    <a className={styles["instagram-card-user-name"]} href="https://www.instagram.com/followmeto/">followmeto</a>
                    <div className={styles["instagram-card-time"]} >58 min</div>
                    </div>
                
                    <div className={styles["intagram-card-image"]}>
                    <img src="https://scontent-mia1-2.cdninstagram.com/t51.2885-15/e35/16464393_1785164815079165_2015865418891132928_n.jpg" height="600px" alt=""/>
                    </div>
                
                    <div className={styles["instagram-card-content"]}>
                    <p className={styles.likes}>18.068 Mi piace</p>
                    <p><a className={styles["instagram-card-content-user"]} href="https://www.instagram.com/followmeto/">followmeto</a> So excited to have made it to Lapland! Our first stop was sleeping inside a room made entirely of ice at the Kemi Snow Hotel 😱 Stoked that I've ticked this off my bucket list and never have to do it again... Let's just say the novelty of sleeping in -5 degrees temperature quickly wears off (but hey, it was a COOL experience nonetheless) 😜❄️ <a className={styles["hashtag"]} href="https://www.instagram.com/explore/tags/visitkemi/">#visitkemi</a></p>
                    <p class="comments">commenti:</p>
                    <a className={styles["user-comment"]} href="https://www.instagram.com/anitzakm/">sanguine.j@loaf_made</a> <span>wowwwwww</span>
                    <a className={styles["user-comment"]} href="https://www.instagram.com/anitzakm/">edieandottotravelsSo</a> <span>cool ❄️</span>
                    <hr />
                    </div>
                    
                    <div className={styles["instagram-card-footer"]}>
                    <a className={styles["footer-action-icons"]} href="#" ><i className={styles["fa fa-heart-o"]}></i></a>
                    <input className={styles["comments-input"]} type="text" placeholder="Aggiungi un commento"/>
                    <a className={styles["footer-action-icons"]}  href="#"><i className={styles["fa fa-ellipsis-h"]}></i></a>
                    </div>

                </div>
        </div>
    );
}

export default PostCard;