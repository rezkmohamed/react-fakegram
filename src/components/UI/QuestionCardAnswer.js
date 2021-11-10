import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import classes from "./QuestionCardAnswer.module.scss";
import { updateQuestion } from '../../services/question-service';
import { useHistory } from 'react-router';

const QuestionCardAnswer = ({question}) => {
    console.log(question);
    const answerToSend = useRef();
    const history = useHistory();

    const onSubmitAnswer = (event) => {
        event.preventDefault();
        const answer = answerToSend.current.value;
        updateQuestion(question.idQuestion, answer)
        .then(res => {
            answerToSend.current.value = "";
            if(res) {
                history.push(`/profiles/${question.profileReciver.id}`)
            }
        }).catch(err => {
            window.alert('ERRRORRRRRRRR::::: ' + err.message);
            answerToSend.current.value = "";
        });



    };

    return (
        <React.Fragment>
            <div className="jumbotron" style={{'width': '80vw'}}>
                {
                    !question.isAnonym &&
                    <h1 className="display-4" style={{fontSize: '35px'}}><Link to={"/profiles/" + question.profileSender.id} style={{ textDecoration: 'none', color: '#ff2c74'}}>{question.profileSender.nickname}</Link> ha chiesto</h1>
                }
                {
                    question.isAnonym &&
                    <h1 className="display-4" style={{fontSize: '35px'}}>un anonimo ha chiesto</h1>
                }
                <p className="lead">{question.question}</p>

                <textarea ref={answerToSend} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                <button className={`btn btn-primary btn-lg ${classes.color}`} style={{marginTop: '13px'}} onClick={onSubmitAnswer}>Invia risposta</button>
            </div>
        </React.Fragment>
    );
}

export default QuestionCardAnswer;