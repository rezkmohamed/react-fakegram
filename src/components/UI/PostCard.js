import React from "react";
import styles from './PostCard.module.scss';

const PostCard = props => {
    return(
        <div>
        <div class="col-12">
            <div class="contents">
                <div class="hidden">
                    <svg id="dots" viewBox="0 0 48 48">
                        <circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        <circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle>
                        <circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle>
                    </svg>
                </div>

                <article class="instapost">
                    <header class="instapost__header">
                        <a class="profile-img" >
                            <img src="" />
                        </a>
                        <div class="profile-name" >
                            <a  class="user instalink"  >
                                username
                            </a>
                        </div>


                        <button class="btn btn-more dropdown-css">
                        </button>
                        <div>
                            <a class="dropdown-item" data-toggle="modal" data-target="#exampleModal">Elimina</a>
                            <a class="dropdown-item">Modifica</a>
                        </div>


                    </header>
                    <section class="instapost__image">
                        <img class="img img-0 show" src="" alt="image" />
                        <div class="like-heart">
                        </div>
                        <div class="ctrl ctrl-left hide">
                            <button>
                                <i class="fa fa-angle-left" ></i>
                            </button>
                        </div>
                        <div class="ctrl ctrl-dots"></div>
                    </section>
                    <section class="instapost__action">
                        <button class="btn btn-like">

                            <img src="../../../assets/icons/heart-filled.svg" />

                            <img src="../../../assets/icons/heart.svg" id="like" />
                        </button>
                        <button class="btn btn-comment" >
                            <img src="" />

                        </button>
                    </section>
                    <section class="instapost__likes">
                        Piace a <a  class="instalink" > 
                            1
                            <span>persona</span> </a>
                    </section>
                    <section class="instapost__description">
                        <a class="user instalink" >
                                nickname
                            </a> descrizione post
                    </section>
                    <section class="instapost__description">
                    </section>


                    <section class="instapost__timestamp">
                        data
                    </section>
                    <section class="instapost__add-comment">

                        <textarea 
                                    class="comment-input" 
                                    placeholder="Aggiungi un commento" 
                                    rows="1">
                        </textarea>
                        <button 
                                    class="btn btn-send-comment" 
                                    type="submit">
                            Invia
                        </button>
                    </section>
                </article>
            </div>
        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Eliminazione post</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        Se decidi di proseguire, il post non sarà più recuperabile. Sei sicuro di procedere?
                    </div>
                    <div class="modal-footer">
                        <button class="btn text-white" style="background-color: #E1306C;"  data-dismiss="modal">Sì</button>
                    </div>
                </div>
            </div>
</div>

        </div>
    )
};

export default PostCard;