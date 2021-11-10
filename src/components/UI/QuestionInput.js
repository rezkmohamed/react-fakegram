import React from 'react';
import classes from "./QuestionInput.module.scss";

const QuestionInput = (props) => {
    return (
        <React.Fragment>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Fai una nuova domanda</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Anonimo</label>
                </div>
                <button type="submit" className={`btn btn-primary ${classes.color}`}>Chiedi!</button>
            </form>
        </React.Fragment>
    );
}

export default QuestionInput;