import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './ChatComponent.module.scss';
import Header from "../../../UI/Header";
import ChatContent from '../ChatContent/ChatContent';
import { fetchConversationsForProfile, openWebSocket } from '../../../../services/message-conversation-service';


const ChatComponent = () => {
    const [conversations, setConversations] = useState([]);
    const [isLoadingConversations, setIsLoadingConversations] = useState(true);
    const [error, setError] = useState(false);
    const [idProfile, setIdProfile] = useState('');
    const [selectedConversation, setSelectedConversation] = useState(null);

    

    useEffect(() => {
        setIsLoadingConversations(true);
        setError(false);
        setIdProfile(localStorage.getItem('id'));

        openWebSocket();

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
    }, [idProfile]);


    return (
        <React.Fragment>
            <Header />
            <div className={classes['chat-container']}>
                <Sidebar
                        setSelectedConversation={setSelectedConversation}
                        idprofile={idProfile} 
                        isLoading={isLoadingConversations} 
                        errorLoading={error} 
                        conversations={conversations}/>
                <div className={classes.chat}>
                    {
                        !selectedConversation &&
                        <div className={classes['chat-placeholder']}>
                            <h2>Nessuna conversazione selezionata</h2>
                            <p>fakeGram ti permette di messaggiare con altre persone. Ricordati di <br /> mantenere un comportamento corretto e rispettoso.</p>
                        </div> 
                    }
                    {
                        selectedConversation &&
                        <ChatContent conversation={selectedConversation} />
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatComponent;