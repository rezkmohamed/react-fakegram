import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuestionCard.module.scss";

const QuestionCard = ({question}) => {
    const onRemoveQuestion = () => {
        const isSure = window.confirm('SICURO?');
        console.log(isSure);
        if(isSure){
            
        }
    };  

    return (
        <React.Fragment>
            <div className={`jumbotron ${classes['main-div']}`}>
                <button className="btn btn-danger float-right" onClick={onRemoveQuestion}>x</button>
                {
                    !question.isAnonym && 
                    <h1 className="display-4" style={{fontSize: '35px'}}><Link to={"/profiles/" + question.profileSender.id} style={{ textDecoration: 'none', color: '#ff2c74'}}>{question.profileSender.nickname}</Link> ha chiesto</h1>
                }
                {
                    question.isAnonym &&
                    <h1 className="display-4" style={{fontSize: '35px'}}>un anonimo ha chiesto</h1>
                }
                <p>{question.question}</p>
                {/* <h1 className="display-4">{question.question}</h1> */}
                <hr className="my-4" />
                <p>{question.answer}</p>
            </div>
        </React.Fragment>
    );
}

export default QuestionCard;