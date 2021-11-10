import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Header from '../../UI/Header';
import classes from "./AnswerToPendingQuestionPage.module.scss";

const AnswerToPendingQuestionPage = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idQuestion = queryParams.get('idQuestion');

    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState(null);

    useEffect(() => {

    }, [idQuestion]);



    return (
        <React.Fragment>
            <Header />
        </React.Fragment>
    );
}

export default AnswerToPendingQuestionPage;