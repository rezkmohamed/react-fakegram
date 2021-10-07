import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Register.module.scss";
import { registerNewProfile } from "../../../../services/auth-service";
import SuccessMessage from "../../../UI/SuccessMessage";
import ErrorMessage from "../../../UI/ErrorMessage";

const Register = () => {
    const history = useHistory();

    const usernameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confermPasswordInputRef = useRef();


    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [registrationIsValid, setRegistrationIsValid] = useState(false);
    const [message, setMessage] = useState("Profilo registrato con successo. Procedere con il login");

    const goBackToLoginPage = () => {
        console.log('btn clicked!');
        history.replace('/login');
    }

    const submitRegisterForm = (event) => {
        event.preventDefault();
        console.log(passwordInputRef.current.value);
        console.log(confermPasswordInputRef.current.value);
        if(passwordInputRef.current.value !== confermPasswordInputRef.current.value){
            setMessage("Hai inserito password diverse scemo!!!");
            setFormIsSubmitted(true);
            setRegistrationIsValid(false);
            return;
        }
        registerNewProfile(emailInputRef.current.value, passwordInputRef.current.value, usernameInputRef.current.value, usernameInputRef.current.value).then(res => {
            if(res){
                console.log(res);
                setFormIsSubmitted(true);
                setRegistrationIsValid(true);
            }
        }).catch(err => {
            console.log(err);
            setMessage("Errore: prova con un'altra mail");
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
                    <h1 style={{"paddingTop": "1em", "color": "#E1306C", "fontFamily": "cursive"}}>fakeGram</h1>
                    <p>Registrandoti a fakeGram dichiari di avere almeno 17 anni.</p>
                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>

                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                {
                                formIsSubmitted && registrationIsValid && <SuccessMessage message={message} />
                            }
                            {
                                formIsSubmitted && !registrationIsValid && <ErrorMessage message={message} />
                            }

                    <div className={classes['login-form']} style={{"paddingTop": "1em"}}>
                        <form onSubmit={submitRegisterForm}>
                            <h2 className={globalClasses['text-center']} style={{"color": "#E1306C"}}>Registrazione</h2>   
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={globalClasses['input-group-prepend']}>                  
                                    </div>
                                    <input 
                                            type="text" 
                                            className={globalClasses['form-control']}
                                            name="email" 
                                            placeholder="Email" 
                                            ref={emailInputRef}
                                            required="required" />				
                                </div>
                            </div>
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={globalClasses['input-group-prepend']}>                  
                                    </div>
                                    <input 
                                            type="text" 
                                            className={globalClasses['form-control']}
                                            name="username" 
                                            placeholder="Username" 
                                            ref={usernameInputRef}
                                            required="required" />				
                                </div>
                            </div>
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={globalClasses['input-group-prepend']}>
                                    </div>
                                    <input 
                                            type="password" 
                                            className={globalClasses['form-control']}
                                            name="password" 
                                            placeholder="Password" 
                                            ref={passwordInputRef}
                                            required="required" />				
                                </div>
                            </div>        
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={globalClasses['input-group-prepend']}>
                                    </div>
                                    <input 
                                            type="password" 
                                            className={globalClasses['form-control']}
                                            name="password" 
                                            placeholder="Conferma password" 
                                            ref={confermPasswordInputRef}
                                            required="required" />				
                                </div>
                            </div>        
                            <div className="form-group">
                                <button 
                                        type="submit" 
                                        className="btn btn-primary login-btn btn-block" 
                                        style={{"backgroundColor": "#E1306C"}}
                                        >Registrati</button>
                            </div>
                        </form>
                    </div>
                </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;