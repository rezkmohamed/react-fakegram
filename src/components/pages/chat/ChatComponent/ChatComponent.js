import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import classes from './ChatComponent.module.scss';
import Header from "../../../UI/Header";
import ChatContent from '../ChatContent/ChatContent';
import { fetchConversationsForProfile, openWebSocket} from '../../../../services/message-conversation-service';
import { fetchProfileLogged } from '../../../../services/profile-service';

const ChatComponent = () => {
    const [conversations, setConversations] = useState([]);
    const [isLoadingConversations, setIsLoadingConversations] = useState(true);
    const [error, setError] = useState(false);
    const [idProfile, setIdProfile] = useState('');
    const [profile, setProfile] = useState(null);
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [lastMessageSelectedConversation, setLastMessageSelectedConversation] = useState('');
    
    useEffect(() => {
        setIsLoadingConversations(true);
        setError(false);
        let id = localStorage.getItem('id');
        setIdProfile(id);
        openWebSocket();


        fetchConversationsForProfile()
        .then(response => {
            // console.log(response);
            setConversations(response);

            if(response.length > 0) {
                if(response[0].firstProfile.id === idProfile){
                    setProfile(response[0].firstProfile);
                } else {
                    setProfile(response[0].secondProfile);
                }
                setIsLoadingConversations(false);
                setError(false);    
            } else {
                fetchProfileLogged()
                .then(res => {
                    setProfile(res);
                    setIsLoadingConversations(false);
                    setError(false);        
                }).catch(err => {
                    console.log(err);
                    setIsLoadingConversations(false);
                    setError(true);        
                });
            }
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
                        profile={profile}
                        idProfile={idProfile} 
                        isLoading={isLoadingConversations} 
                        errorLoading={error} 
                        conversations={conversations}
                        lastMessageSelectedConversation={lastMessageSelectedConversation}/>
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
                        <ChatContent profile={profile} conversation={selectedConversation} setLastMessageSelectedConversation={setLastMessageSelectedConversation} />
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatComponent;