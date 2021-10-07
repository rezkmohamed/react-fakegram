import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import globalClasses from "../../../../assets/global-styles/bootstrap.min.module.css";
import classes from "./Login.module.css";

const users = [
    {
        idProfile: 'a',
        name: 'pippo',
        nickname: 'pippo_nickname',
        bio: 'bio stupida',
        profilePic: "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999",
        email: 'test1@test.com',
        password: 'pass'
    },
    {
        idProfile: 'b',
        name: 'pluto',
        nickname: 'pluto_nickname',
        bio: 'bio stupida',
        profilePic: "https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999",
        email: 'test2@test.com',
        password: 'pass'
    }
]


const Login = () => {
    const [errorLogin, setErrorLogin] = useState(false);
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const history = useHistory();


    const handleInputEmail = (event) => {
        setInputEmail(event.target.value);
    }

    const handleInputPassword = (event) => {
        setInputPassword(event.target.value);
    }

    const submitLoginForm = (event) => {
        event.preventDefault();
        for(let user of users){
            if(user.email === inputEmail && user.password === inputPassword){
                console.log('user authenticated and found');
                // setErrorLogin(false);
                history.push('/');
                return;
            }
        }
        setErrorLogin(true);
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