import React, { useRef, useState } from "react";
import Header from "../../UI/Header";
import classes from "./UpdateProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import { updateGeneralDataForProfile } from "../../../services/profile-service";
import SuccessMessage from "../../UI/SuccessMessage";
import ErrorMessage from "../../UI/ErrorMessage";

/**
 * FIXME:
 * LOGIC TO BE IMPLEMENTED
 * @returns 
 */
const UpdateProfilePage = () => {
    const nicknameInputRef = useRef();
    const nameInputRef = useRef();
    const bioInputRef = useRef();
    const emailInputRef = useRef();

    const [updateGeneralDataIsValid, setUpdateGeneralDataIsValid] = useState(false);
    const [requestIsSent, setRequestIsSent] = useState(false);
    const [message, setMessage] = useState("");

    const submitUpdateGeneralData = (event) => {
        event.preventDefault();
        setRequestIsSent(false);
        setUpdateGeneralDataIsValid(false);

        updateGeneralDataForProfile(nameInputRef.current.value, nicknameInputRef.current.value, null, bioInputRef.current.value)
        .then(res => {
            if(res){
                setUpdateGeneralDataIsValid(true);
            }
            setRequestIsSent(true);
            setMessage('Data updated!!!');
            localStorage.removeItem('nickname');
            localStorage.setItem('nickname', nicknameInputRef.current.value);
        }).catch(err => {
            setMessage(err.message);
            setRequestIsSent(true);
        })
    }


    return(
        <React.Fragment>
            <Header />
            <div className="container">
                <div className={`${classes.row} ${globalClasses.row}`}>
                    <div className="col-3"></div>
                    <div className="col-6">
                        {/* <div className="loading">loading...</div>

                        <div className="alert alert-danger" role="alert">
                        Errore nella modifica dei dati!
                        </div>

                        <div className="alert alert-success" role="alert">
                            Dati cambiati con successo
                        </div> */}
                        {
                            requestIsSent && updateGeneralDataIsValid &&
                            <SuccessMessage message={message} />
                        }
                        {
                            requestIsSent && !updateGeneralDataIsValid &&
                            <ErrorMessage message={message} />
                        }

                        <form onSubmit={submitUpdateGeneralData} enctype="multipart/form-data">
                            <h3>Nickname:</h3>
                            <input 
                                    type="text"
                                    className="form-control"
                                    name="nickname"
                                    ref={nicknameInputRef}
                                    required
                                    minlength="4" />
                            <h3>Nome:</h3>
                            <input 
                                    type="text"
                                    className="form-control"
                                    name="nome"
                                    ref={nameInputRef}
                                    required
                                    minlength="4" />
                            <h3>Biografia:</h3>
                            <input 
                                    type="text" 
                                    className="form-control"
                                    name="biografia"
                                    ref={bioInputRef}
                                    required
                                    minlength="4" />
                            <button 
                                    type="submit"
                                    className={`btn btn-primary ${classes['btn-primary']}`}>
                                modifica
                            </button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>

                <hr />
                {/* <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="alert alert-danger" role="alert"
                            *ngIf="!fileIsOkay && fileIsSended ">
                            Errore nel caricamento della foto!
                            </div>
                
                            <div className="alert alert-success" role="alert" 
                            *ngIf="fileIsOkay && fileIsSended">
                                Foto caricata con successo!
                            </div>
                            <h3>Seleziona un'immagine del profilo: (formato png)</h3>
                            <div className="custom-file mb-2">
                                <input 
                                    type="file"
                                    className="custom-file-input"
                                    name="proPic"
                                    id="customFile"
                                    #fileInput
                                    (change)="onFileChanged($event)"
                                    required
                                    >
                                <label 
                                    className="custom-file-label"
                                    for="customFile"
                                    (click)="fileInput.click()">
                                    <span *ngIf="!fileIsSelected">Scegli file</span>
                                    <span *ngIf="fileIsSelected">{{fileName}}</span>
                            </label>
                                <button className="btn btn-primary">Carica la foto</button>

                            </div>

                        </div>
                        <div className="col-3"></div>
                </div> */}


                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        {/* <div className="alert alert-danger" role="alert">
                                Errore nel cambio email, ricontrolla la password!
                        </div>

                        <div className="alert alert-success" role="alert">
                            Email cambiata con successo
                        </div> */}

                        <form>
                            <h3>Nuova email:</h3>
                            <input 
                                    type="text"
                                    id="email"
                                    formControlName="email"
                                    className="form-control" />
                            <h3>Password:</h3>
                            <input
                                    type="password"
                                    id="password1"
                                    formControlName="password"
                                    className="form-control" />
                            <button
                                    type="submit"
                                    className={`btn btn-primary ${classes['btn-primary']}`}>
                                    cambia mail
                            </button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">

                        {/* <div className="alert alert-danger" role="alert">
                        password sbagliata!
                        </div>

                        <div className="alert alert-success" role="alert">
                            Password modificata con successo.
                        </div> */}

                        
                        <form>
                            <h3>Vecchia password:</h3>
                            <input 
                                    type="password"
                                    id="old"
                                    formControlName="old"
                                    className="form-control" />
                            <h3>Nuova password:</h3>
                            <input 
                                    type="password"
                                    id="new"
                                    formControlName="new"
                                    className="form-control" />
                            <h3>Conferma password:</h3>
                            <input 
                                    type="password"
                                    id="confirm"
                                    formControlName="confirm"
                                    className="form-control" />
                            <button 
                                    
                                    type="submit"
                                    className={`btn btn-primary ${classes['btn-primary']}`}>
                                cambia password
                            </button>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UpdateProfilePage;