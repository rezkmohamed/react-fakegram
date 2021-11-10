import React from 'react';
import Header from '../../UI/Header';
import QuestionPendingCard from '../../UI/QuestionPendingCard';
import classes from "./PendingQuestionsPage.module.scss";

const PendingQuestionsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={classes.container}>
                <h1>Le tue domande in sospeso:</h1>
                <div className={classes.questions}>
                    <QuestionPendingCard />
                    <QuestionPendingCard />
                    <QuestionPendingCard />
                    <QuestionPendingCard />
                    <QuestionPendingCard />
                </div>
            </div>
        </React.Fragment>
    );
}

export default PendingQuestionsPage;