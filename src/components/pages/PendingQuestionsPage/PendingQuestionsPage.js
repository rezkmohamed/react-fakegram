import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Header from '../../UI/Header';
import QuestionPendingCard from '../../UI/QuestionPendingCard';
import classes from "./PendingQuestionsPage.module.scss";
import { fetchPendingQuestions } from '../../../services/question-service';

const PendingQuestionsPage = () => {
    const [questionsPending, setQuestionsPending] = useState([]);


    useEffect(() => {
        fetchPendingQuestions()
        .then(res => {
            setQuestionsPending(res);
        }).catch(err => {
            console.log(err);
            window.alert("ERRRORRR::: " + err.message);
        });
    }, []);


    return (
        <React.Fragment>
            <Header />
            <div className={classes.container}>
                <h1>Le tue domande in sospeso:</h1>
                <div className={classes.questions}>
                    {
                        questionsPending.map(q => {
                            return(
                                <QuestionPendingCard key={q.idQuestion} question={q} />
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default PendingQuestionsPage;