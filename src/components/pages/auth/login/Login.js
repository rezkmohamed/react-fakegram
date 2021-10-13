import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Login.module.css";
import { login } from "../../../../services/auth-service";
import jwt_decode from "jwt-decode";
import AuthContext from "../../../../services/auth-context";
import ErrorMessage from "../../../UI/ErrorMessage";

const Login = () => {
    const [errorLogin, setErrorLogin] = useState(true);
    const [loginRequestIsSent, setLoginRequestIsSent] = useState(false);
    const [message, setMessage] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const history = useHistory();


    const authCtx = useContext(AuthContext);

    const handleInputEmail = (event) => {
        setInputEmail(event.target.value);
    }

    const handleInputPassword = (event) => {
        setInputPassword(event.target.value);
    }

    const submitLoginForm = (event) => {
        event.preventDefault();
        setErrorLogin(true);
        setLoginRequestIsSent(false);

        login(inputEmail, inputPassword).then(res => {
            let token = res.headers.get("Authentication").replace("Bearer ", "");
            let responseDecoded = jwt_decode(token);
            // const expirationTime = new Date(new Date().getTime() + (+responseDecoded.exp));
            const expirationTime = new Date((+responseDecoded.exp)*1000);
            localStorage.setItem('nickname', responseDecoded.nickname);
            localStorage.setItem('id', responseDecoded.idUser);
            setErrorLogin(false);
            setLoginRequestIsSent(true);
            history.replace('/');
            authCtx.login(token, expirationTime.toString());
        }).catch(err => {
            console.log(err);
            setMessage(err.message);
            setErrorLogin(true);
            setLoginRequestIsSent(true);
        })

        // setErrorLogin(true);
    }

    return (
        <div className={globalClasses.container}>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    <h1 style={{"paddingTop": "1em", "color": "#E1306C", "fontFamily": "cursive"}}>fakeGram</h1>
                    <p>fakeGram ti permette di connetterti con altre persone come te, chattare e postare tantissimi bei post!</p>
                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    {
                        errorLogin && loginRequestIsSent &&
                        <ErrorMessage message={message} />      
                    }

                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    <div className={classes['login-form']} style={{"paddingTop": "1em"}}>
                        <form>
                            <h2 className={globalClasses['text-center']} style={{"color": "#E1306C"}}>Accedi</h2>   
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={globalClasses['input-group-prepend']}>                  
                                    </div>
                                    {
                                        //input della mail
                                    }
                                    <input 
                                            value={inputEmail}
                                            onChange={handleInputEmail}
                                            type="text" 
                                            className={globalClasses['form-control']}
                                            name="email" 
                                            placeholder="Email" 
                                            required="required" />				
                                </div>
                            </div>
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={globalClasses['input-group-prepend']}>
                                    </div>
                                    {
                                        //input della password
                                    }
                                    <input 
                                            value={inputPassword}
                                            onChange={handleInputPassword}
                                            type="password" 
                                            className={globalClasses['form-control']}
                                            name="password" 
                                            placeholder="Password" 
                                            required="required" />				
                                </div>
                            </div>        
                            <div className="form-group">
                                <button 
                                        type="submit" 
                                        className="btn btn-primary login-btn btn-block" 
                                        style={{"backgroundColor": "#E1306C"}}
                                        onClick={submitLoginForm}
                                        >Accedi</button>
                            </div>
                            <div className="clearfix">
                                <Link to="/" className="float-right" style={{"color": "#E1306C"}}>Password dimenticata?</Link>
                            </div>
                        </form>
                        <p className="text-center text-muted small">Non hai ancora un account? <Link to="/register" style={{"color":"#E1306C", "cursor": "pointer"}}>Registrati qui!</Link></p>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Login;