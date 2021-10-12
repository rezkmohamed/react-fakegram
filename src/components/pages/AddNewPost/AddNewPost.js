import React, { useState } from "react";
import Header from "../../UI/Header";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import classes from './AddNewPost.module.scss';
import { addNewPost } from "../../../services/post-service";
import SuccessMessage from "../../UI/SuccessMessage";
import ErrorMessage from "../../UI/ErrorMessage";

const AddNewPost = () => {
    const [imgPost, setImgPost] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [addPostIsValid, setAddPostIsValid] = useState(false);
    const [message, setMessage] = useState("Post aggiunto con successo!");

    const handleImgPost = (event) => {
        setImgPost(event.target.value.toString());
    }

    const handleDescriptionPost = (event) => {
        setPostDescription(event.target.value);
    }

    const handleAddNewPost = () => {
        console.log(imgPost);
        console.log(postDescription);
        addNewPost(imgPost, postDescription)
        .then(response => {
            setFormIsSubmitted(true);
            setAddPostIsValid(true);
        }).catch(err => {
            setFormIsSubmitted(true);
            setAddPostIsValid(false);
            setMessage(err.message);
        });
    }

    return(
        <React.Fragment>
            <Header />
            <div className={globalClasses.container} style={{"paddingTop": "6em"}}>
                <div className={globalClasses.row}>
                    <div className={globalClasses['col-3']}></div>
                    <div className={globalClasses['col-6']}>
                        {
                            formIsSubmitted && addPostIsValid &&
                            <SuccessMessage message={message} />
                        }
                        {
                            formIsSubmitted && !addPostIsValid &&
                            <ErrorMessage message={message} />
                        }
                            {/* <div className="alert alert-danger" role="alert">
                            Errore nel caricamento della foto!
                            </div> */}

                            {/* <div className="alert alert-success" role="alert" >
                                Foto caricata con successo!
                            </div> */}

                                <h3 className={globalClasses['text-center']}>Aggiungi foto</h3>
                                <input
                                        type="text"
                                        className={globalClasses['form-control']}
                                        name="descrizione"
                                        value={imgPost}
                                        onChange={handleImgPost}
                                        placeholder="url foto..."
                                        required />


                                <h3 className={globalClasses['text-center']}>Aggiungi una descrizione</h3>
                                <input
                                        type="text"
                                        className={globalClasses['form-control']}
                                        name="descrizione"
                                        value={postDescription}
                                        onChange={handleDescriptionPost}
                                        placeholder="descrizione..."
                                        required />
                                
                                <button className={`${globalClasses.btn} ${globalClasses['btn-primary']} ${classes['btn-primary']}`}
                                onClick={handleAddNewPost}>Carica il post</button>
                    </div>
                    <div className={globalClasses['col-3']}></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddNewPost;