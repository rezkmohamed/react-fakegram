import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './ChatComponent.module.scss';
import Header from "../../../UI/Header";

const ChatComponent = () => {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <div className={classes['chat-container']}>
                {
                    /**
                     * SIDEBAR GOES HERE
                     */
                }
                <Sidebar />
                <div className={classes.chat}>
                    <div className={classes['chat-placeholder']}>
                    <h2>Nessuna conversazione selezionata</h2>
                    <p>fakeGram ti permette di messaggiare con altre persone. Ricordati di <br /> mantenere un comportamento corretto e rispettoso.</p>
                    </div>
                    {
                    /**
                     * CHAT CONTENT GOES HERE.
                     */
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatComponent;