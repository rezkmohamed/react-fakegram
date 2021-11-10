import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Header from '../../UI/Header';
import { fetchPendingQuestion } from '../../../services/question-service';
import classes from "./AnswerToPendingQuestionPage.module.scss";

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
            console.log(res);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }, [idQuestion]);

    return (
        <React.Fragment>
            <Header />
        </React.Fragment>
    );
}

export default AnswerToPendingQuestionPage;