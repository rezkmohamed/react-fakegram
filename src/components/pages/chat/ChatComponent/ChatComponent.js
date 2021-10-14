import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './ChatComponent.module.scss';
import Header from "../../../UI/Header";
import ChatContent from '../ChatContent/ChatContent';
import { fetchConversationsForProfile } from '../../../../services/message-conversation-service';


const ChatComponent = () => {
    const [conversations, setConversations] = useState([]);
    const [isLoadingConversations, setIsLoadingConversations] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoadingConversations(true);
        setError(false);
        fetchConversationsForProfile()
        .then(response => {
            console.log(response);
            setConversations(response);
            setIsLoadingConversations(false);
            setError(false);
        }).catch(err => {
            console.log(err);
            setIsLoadingConversations(false);
            setError(true);
        });
    }, []);


    return (
        <React.Fragment>
            <Header />
            <div className={classes['chat-container']}>
                <Sidebar isLoading={isLoadingConversations} errorLoading={error} conversations={conversations}/>
                <div className={classes.chat}>
                    {/* <div className={classes['chat-placeholder']}>
                    <h2>Nessuna conversazione selezionata</h2>
                    <p>fakeGram ti permette di messaggiare con altre persone. Ricordati di <br /> mantenere un comportamento corretto e rispettoso.</p>
                    </div> */}
                    <ChatContent />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatComponent;