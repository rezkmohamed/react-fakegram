import React from "react";
import Header from "../../UI/Header";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import classes from './AddNewPost.module.scss';

const AddNewPost = () => {

    return(
        <React.Fragment>
            <Header />
            <div className={globalClasses.container} style={{"padding-top": "6em"}}>
                <div className={globalClasses.row}>
                    <div className={globalClasses['col-3']}></div>
                    <div className={globalClasses['col-6']}>
                            {/* <div className="alert alert-danger" role="alert">
                            Errore nel caricamento della foto!
                            </div> */}

                            {/* <div className="alert alert-success" role="alert" >
                                Foto caricata con successo!
                            </div> */}

                                <h3 className={globalClasses['text-center']}>Aggiungi foto</h3>
                                {/* <div className={`${globalClasses['custom-file']} ${globalClasses['mb-2']}`}>
                                    <input 
                                        type="file"
                                        className={globalClasses['custom-file-input']}
                                        name="post-img"
                                        id="customFile"
                                        required />
                                    <label 
                                        className={globalClasses['custom-file-label']}
                                        for="customFile">
                                        <span >Scegli file</span>
                                        <span >nome file</span>
                                    </label>
                                </div> */}
                                <input
                                        type="text"
                                        className={globalClasses['form-control']}
                                        name="descrizione"
                                        placeholder="url foto..."
                                        required />


                                <h3 className={globalClasses['text-center']}>Aggiungi una descrizione</h3>
                                <input
                                        type="text"
                                        className={globalClasses['form-control']}
                                        name="descrizione"
                                        placeholder="descrizione..."
                                        required />
                                
                                <button className={`${globalClasses.btn} ${globalClasses['btn-primary']} ${classes['btn-primary']}`}>Carica il post</button>
                    </div>
                    <div className={globalClasses['col-3']}></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AddNewPost;