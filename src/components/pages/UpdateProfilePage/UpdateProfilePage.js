import React, { useRef, useState } from "react";
import Header from "../../UI/Header";
import classes from "./UpdateProfilePage.module.css";
import globalClasses from "../../../assets/global-styles/bootstrap.min.module.css";
import { updateGeneralDataForProfile, updatePasswordForProfile } from "../../../services/profile-service";
import SuccessMessage from "../../UI/SuccessMessage";
import ErrorMessage from "../../UI/ErrorMessage";

const UpdateProfilePage = () => {
    const nicknameInputRef = useRef();
    const nameInputRef = useRef();
    const bioInputRef = useRef();
    const emailInputRef = useRef();
    const oldPasswordInputRef = useRef();
    const newPasswordInputRef = useRef();
    const confirmNewPasswordInputRef = useRef();

    const [updateGeneralDataIsValid, setUpdateGeneralDataIsValid] = useState(false);
    const [requestGeneralDataIsSent, setRequestGeneralDataIsSent] = useState(false);

    const [updateEmailIsValid, setUpdateEmailIsValid] = useState(false);
    const [requestEmailIsSent, setRequestEmailIsSent] = useState(false);

    const [updatePasswordIsValid, setUpdatePasswordIsValid] = useState(false);
    const [requestUpdatePasswordIsSent, setRequestUpdatePasswordIsSent] = useState(false);

    const [message, setMessage] = useState("");




    const submitUpdateGeneralData = (event) => {
        event.preventDefault();
        setRequestGeneralDataIsSent(false);
        setUpdateGeneralDataIsValid(false);

        updateGeneralDataForProfile(nameInputRef.current.value, nicknameInputRef.current.value, null, bioInputRef.current.value)
        .then(res => {
            if(res){
                setUpdateGeneralDataIsValid(true);
            }
            setRequestGeneralDataIsSent(true);
            setMessage('Dati modificati!!!');
            localStorage.removeItem('nickname');
            localStorage.setItem('nickname', nicknameInputRef.current.value);
        }).catch(err => {
            setMessage(err.message);
            setRequestGeneralDataIsSent(true);
        });
    };

    const submitUpdateEmail = (event) => {
        event.preventDefault();
        setRequestEmailIsSent(false);
        setUpdateEmailIsValid(false);

        updateGeneralDataForProfile(null, null, emailInputRef.current.value, null)
        .then(res => {
            if(res){
                setUpdateEmailIsValid(true);
            }
            setRequestEmailIsSent(true);
            setMessage('Email modificata!!!');
        }).catch(err => {
            setMessage(err.message);
            setRequestEmailIsSent(true);
        });
    };

    const submitUpdatePassword = (event) => {
        event.preventDefault();
        setUpdatePasswordIsValid(false);
        setRequestUpdatePasswordIsSent(false);

        if(newPasswordInputRef.current.value !== confirmNewPasswordInputRef.current.value){
            setMessage('scemo hai messo password diverse');
            setUpdatePasswordIsValid(false);
            setRequestUpdatePasswordIsSent(true);
            return;
        }

        updatePasswordForProfile(oldPasswordInputRef.current.value, newPasswordInputRef.current.value)
        .then(res => {
            if(res) {
                setUpdatePasswordIsValid(true);
                setMessage('Password modificataaaaaaa!');
            }
            setRequestUpdatePasswordIsSent(true);
        }).catch(err => {
            setUpdatePasswordIsValid(false);
            setRequestUpdatePasswordIsSent(true);
            setMessage(err.message);
        });
    }


    return(
        <React.Fragment>
            <Header />
            <div className="container">
                <div className={`${classes.row} ${globalClasses.row}`}>
                    <div className="col-3"></div>
                    <div className="col-6">
                        {
                            requestGeneralDataIsSent && updateGeneralDataIsValid &&
                            <SuccessMessage message={message} />
                        }
                        {
                            requestGeneralDataIsSent && !updateGeneralDataIsValid &&
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
                                    minLength="4" />
                            <h3>Nome:</h3>
                            <input 
                                    type="text"
                                    className="form-control"
                                    name="nome"
                                    ref={nameInputRef}
                                    required
                                    minLength="4" />
                            <h3>Biografia:</h3>
                            <input 
                                    type="text" 
                                    className="form-control"
                                    name="biografia"
                                    ref={bioInputRef}
                                    required
                                    minLength="4" />
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

                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        {
                            requestEmailIsSent && updateEmailIsValid && 
                            <SuccessMessage message={message} />
                        }
                        {
                            requestEmailIsSent && !updateEmailIsValid &&
                            <ErrorMessage message={message} />
                        }

                        <form onSubmit={submitUpdateEmail}>
                            <h3>Nuova email:</h3>
                            <input 
                                    type="text"
                                    id="email"
                                    formControlName="email"
                                    ref={emailInputRef}
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
                        {
                            updatePasswordIsValid && requestUpdatePasswordIsSent &&
                            <SuccessMessage message={message} />
                        }
                        {
                            !updatePasswordIsValid && requestUpdatePasswordIsSent &&
                            <ErrorMessage message={message} />
                        }
                        
                        <form onSubmit={submitUpdatePassword}>
                            <h3>Vecchia password:</h3>
                            <input 
                                    type="password"
                                    id="old"
                                    formControlName="old"
                                    ref={oldPasswordInputRef}
                                    className="form-control" />
                            <h3>Nuova password:</h3>
                            <input 
                                    type="password"
                                    id="new"
                                    formControlName="new"
                                    ref={newPasswordInputRef}
                                    className="form-control" />
                            <h3>Conferma password:</h3>
                            <input 
                                    type="password"
                                    id="confirm"
                                    formControlName="confirm"
                                    ref={confirmNewPasswordInputRef}
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