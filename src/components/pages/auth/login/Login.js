import React from "react";
import { Link } from "react-router-dom";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Login.module.css";


const Login = (props) => {
    return (
        <div className={globalClasses.container}>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    <h1 style={{"padding-top": "1em", "color": "#E1306C", "font-family": "cursive"}}>fakeGram</h1>
                    <p>fakeGram ti permette di connetterti con altri studenti come te, chattare e postare tantissimi bei post!</p>
                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    <div className={`${globalClasses.alert} ${globalClasses['alert-danger']}`} role="alert">
                        Errore. Ricontrolla email e password
                    </div>
                </div>
                <div className={globalClasses['col-3']}></div>
            </div>
            <div className={globalClasses.row}>
                <div className={globalClasses['col-3']}></div>
                <div className={globalClasses['col-6']}>
                    <div className={classes['login-form']} style={{"padding-top": "1em"}}>
                        <form>
                            <h2 className={globalClasses['text-center']} style={{"color": "#E1306C"}}>Accedi</h2>   
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={classes['input-group-prepend']}>
                                        <span className={globalClasses['input-group-text']}>
                                            <span className="fa fa-user"></span>
                                        </span>                    
                                    </div>
                                    <input 
                                            type="text" 
                                            className={classes['form-control']}
                                            name="email" 
                                            placeholder="Email" 
                                            required="required" />				
                                </div>
                            </div>
                            <div className={globalClasses['form-group']}>
                                <div className={globalClasses['input-group']}>
                                    <div className={classes['input-group-prepend']}>
                                        <span className="input-group-text">
                                            <i className="fa fa-lock"></i>
                                        </span>                    
                                    </div>
                                    <input 
                                            type="password" 
                                            className={classes['form-control']}
                                            name="password" 
                                            placeholder="Password" 
                                            required="required" />				
                                </div>
                            </div>        
                            <div className="form-group">
                                <button 
                                        type="submit" 
                                        className="btn btn-primary login-btn btn-block" 
                                        style={{"background-color": "#E1306C"}}
                                        >Accedi</button>
                            </div>
                            <div className="clearfix">
                                <Link className="float-right" style={{"color": "#E1306C"}}>Password dimenticata?</Link>
                            </div>
                        </form>
                        <p className="text-center text-muted small">Non hai ancora un account? <Link style={{"color":"#E1306C", "cursor": "pointer"}}>Registrati qui!</Link></p>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Login;