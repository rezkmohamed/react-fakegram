import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Register.module.scss";
import { registerNewProfile } from "../../../../services/auth-service";
import SuccessMessage from "../../../UI/SuccessMessage";
import ErrorMessage from "../../../UI/ErrorMessage";

/**
 * TODO:
 * 1) aggiungere logica al bottone per tornare alla login page
 * 2) aggiungere una form group per inviare la richiesta di registrazione
 */
let message;



const Register = () => {
    const history = useHistory();

    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confermPasswordInputRef = useRef();


    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [registrationIsValid, setRegistrationIsValid] = useState(false);
    // let message = "Registrazione effettuata con successo!";

    const goBackToLoginPage = () => {
        console.log('btn clicked!');
        history.replace('/login');
    }

    const submitRegisterForm = (event) => {
        event.preventDefault();
        if(passwordInputRef !== confermPasswordInputRef){
            message = 'password diverse scemo!!!';
            setFormIsSubmitted(true);
            setRegistrationIsValid(false);
            return;
        }
        registerNewProfile(emailInputRef, passwordInputRef, usernameInputRef, usernameInputRef).then(res => {
            if(res){
                console.log(res);
                setFormIsSubmitted(true);
                setRegistrationIsValid(true);
            }
        }).catch(err => {
            console.log(err);
            message = err.message;
            setFormIsSubmitted(true);
            setRegistrationIsValid(false);
        })
    }

    return (
        <React.Fragment>
            <div className={globalClasses.container}>
                <div className={globalClasses.row}>
                    <div className={globalClasses['col-3']}>
                        <div className={globalClasses['col-3']}>
                            <div className={classes['bk-btn']} onClick={goBackToLoginPage}><div className={classes['bk-btn-triangle']}></div><div className={classes['bk-btn-bar']}></div></div>
                        </div>
                    </div>
                    <div className={globalClasses['col-6']}>
                        <div className={globalClasses['login-form']} style={{"paddingTop": "1em"}}>
                            {
                                formIsSubmitted && registrationIsValid && <SuccessMessage message={message} />
                            }
                            {
                                formIsSubmitted && !registrationIsValid && <ErrorMessage message={message} />
                            }
                            <form onSubmit={submitRegisterForm}>
                                <h2 className={globalClasses['text-center']} style={{"color": "#E1306C"}}>Registrati</h2>   
                                <div className={globalClasses['form-group']}>
                                    <div className={globalClasses['input-group']}>
                                        <div className={globalClasses['input-group-prepend']}>
                                            <span className={globalClasses['input-group-text']}>
                                                <span className={globalClasses['fa fa-user']}></span>
                                            </span>                    
                                        </div>
                                        <input 
                                                type="text" 
                                                className={globalClasses['form-control']} 
                                                name="username" 
                                                placeholder="Username"
                                                ref={usernameInputRef}
                                                required />				
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-lock"></i>
                                            </span>                    
                                        </div>
                                        <input 
                                                type="password" 
                                                className="form-control" 
                                                name="password" 
                                                placeholder="Password" 
                                                minLength="4"
                                                ref={passwordInputRef}
                                                required />				
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-lock"></i>
                                            </span>                    
                                        </div>
                                        <input  
                                                type="password" 
                                                className="form-control" 
                                                name="confermapassword" 
                                                placeholder="Conferma password" 
                                                minLength="4"
                                                ref={confermPasswordInputRef}
                                                required />				
                                    </div>
                                </div>    

                                <div className={globalClasses['form-group']}>
                                    <div className={globalClasses['input-group']}>
                                        <div className={globalClasses['input-group-prepend']}>
                                            <span className={globalClasses['input-group-text']}>
                                                <i className={`${globalClasses.fa} ${globalClasses['fa-lock']}`}></i>
                                            </span>                    
                                        </div>
                                        <input 
                                                type="email" 
                                                className={globalClasses['form-control']} 
                                                name="email" 
                                                placeholder="email"
                                                required
                                                ref={emailInputRef}
                                                email />				
                                    </div>
                                </div>    

                                <div className={globalClasses['form-group']}>
                                    <button 
                                                type="submit" 
                                                className={`${globalClasses.btn} ${globalClasses['btn-primary']} ${globalClasses['login-btn']} ${globalClasses['btn-block']}`}
                                                style={{
                                                    "backgroundColor": "#E1306C"
                                                }}
                                                >Registrati</button>
                                </div>
                            </form>
                            <p className="text-center text-muted small">Registrandoti dichiari di avere almeno 17 anni</p>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;