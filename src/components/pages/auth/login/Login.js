import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Login.module.css";


const Login = (props) => {
    const[errorLogin, setErrorLogin] = useState(false);



    return (
        <div className={globalClasses.container}>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    <h1 style={{"paddingTop": "1em", "color": "#E1306C", "fontFamily": "cursive"}}>fakeGram</h1>
                    <p>fakeGram ti permette di connetterti con altri studenti come te, chattare e postare tantissimi bei post!</p>
                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    {
                        errorLogin &&                     
                        <div className={`${globalClasses.alert} ${globalClasses['alert-danger']}`} role="alert">
                            Errore. Ricontrolla email e password
                        </div>
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
                                    <input 
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
                                    <input 
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
                                        >Accedi</button>
                            </div>
                            <div className="clearfix">
                                <Link to="/" className="float-right" style={{"color": "#E1306C"}}>Password dimenticata?</Link>
                            </div>
                        </form>
                        <p className="text-center text-muted small">Non hai ancora un account? <Link to="/" style={{"color":"#E1306C", "cursor": "pointer"}}>Registrati qui!</Link></p>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Login;