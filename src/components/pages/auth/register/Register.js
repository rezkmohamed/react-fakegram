import React from "react";
import { useHistory } from "react-router";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Register.module.scss";

/**
 * TODO:
 * 1) aggiungere logica al bottone per tornare alla login page
 * 2) aggiungere una form group per inviare la richiesta di registrazione
 */

const Register = () => {
    const history = useHistory();

    const goBackToLoginPage = () => {
        console.log('btn clicked!');
        history.replace('/login');
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
                    <div>
                        <div className={globalClasses['col-6']}>
                            prova
                        </div>
                    </div>
                    {/* <div className={globalClasses['col-6']}>
                        <div className={globalClasses['login-form']} style={{"padding-top": "1em"}}>
                            <form>
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
                                                minlength="4"
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
                                                minlength="4"
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
                </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;