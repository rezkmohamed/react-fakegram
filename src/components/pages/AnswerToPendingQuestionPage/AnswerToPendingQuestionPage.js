import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Header from '../../UI/Header';
import { fetchPendingQuestion } from '../../../services/question-service';
import classes from "./AnswerToPendingQuestionPage.module.scss";
import QuestionCardAnswer from '../../UI/QuestionCardAnswer';

const AnswerToPendingQuestionPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idQuestion = queryParams.get('idQuestion');

    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchPendingQuestion(idQuestion)
        .then(res => {
            setQuestion(res);
            setIsLoading(false);
        }).catch(err => {
            window.alert('ERRROREEEEE:::: ' + err.message);
            setIsLoading(false);
        });
    }, [idQuestion]);

    return (
        <React.Fragment>
            <Header />
            <div className={classes.content}>
                {
                    isLoading && 
                    <p>LOADINGGGGG......</p>
                }
                {
                    !isLoading && 
                    <QuestionCardAnswer question={question}/>
                }
            </div>
        </React.Fragment>
    );
}

export default AnswerToPendingQuestionPage;