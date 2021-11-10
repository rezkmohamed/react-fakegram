import React from 'react';
// import { Link } from 'react-router-dom';
import classes from "./QuestionCard.module.scss";

const QuestionCard = (props) => {
    return (
        <React.Fragment>
            <div className={`jumbotron ${classes['main-div']}`}>
                <h1 className="display-4">Esempio di domanda, come ti chiami scemo?</h1>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.
                This is an example of an answer.
                </p>
                <p className="lead">
                    {/* <Link className={`btn btn-primary btn-lg ${classes.color}`} role="button">Like</Link> */}
                </p>
            </div>
        </React.Fragment>
    );
}

export default QuestionCard;