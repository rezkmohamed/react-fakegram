import React from 'react';
import classes from "./QuestionInput.module.scss";
import { addNewQuestion } from '../../services/question-service';
import { useRef, useState } from 'react/cjs/react.development';

const QuestionInput = ({idProfileReciver, idProfileSender}) => {
    const question = useRef();
    const [isAnonym, setIsAnonym] = useState(false);

    const onHandleQuestion = (event) => {
        event.preventDefault();
        const questionCurr = question.current.value;
        const questionToSend = {
            idProfileSender: idProfileSender,
            idProfileReciver: idProfileReciver,
            isAnonym: isAnonym,
            isAnswered: false,
            question: questionCurr
        };

        addNewQuestion(questionToSend)
        .then(res => {
            if(res){
                window.alert('DOMANDA INVIATA!');
                question.current.value = "";
            }
        }).catch(err =>{
            console.log(err);
            window.alert('ERRORRRRRR:::::::::' + err.message);
        });
    };

    return (
        <React.Fragment>
            <form onSubmit={onHandleQuestion}>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Fai una nuova domanda</label>
                    <textarea ref={question} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => setIsAnonym(!isAnonym)}/>
                    <label className="form-check-label" for="exampleCheck1">Anonimo</label>
                </div>
                <button type="submit" className={`btn btn-primary ${classes.color}`}>Chiedi!</button>
            </form>
        </React.Fragment>
    );
}

export default QuestionInput;