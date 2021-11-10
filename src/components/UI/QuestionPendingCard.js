import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuestionPendingCard.module.scss";

const QuestionPendingCard = ({question}) => {
    console.log(question);
    const goToAnswerPage = () => {
        console.log('going to answer page...');
    };

    return (
        <React.Fragment>
            <div className="jumbotron" style={{'width': '80vw'}} >
                {
                    !question.isAnonym &&
                    <h1 className="display-4"><Link to={"/profiles/" + question.profileSender.id} style={{ textDecoration: 'none', color: '#ff2c74' }}>{question.profileSender.nickname}</Link> ha chiesto</h1>
                }
                <p className="lead">{question.question}</p>
                {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
                <button className={`btn btn-primary btn-lg ${classes.color}`}onClick={goToAnswerPage}>Rispondi</button>
            </div>
        </React.Fragment>
    );
}

export default QuestionPendingCard;