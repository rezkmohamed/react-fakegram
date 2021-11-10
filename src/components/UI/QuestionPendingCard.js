import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./QuestionPendingCard.module.scss";

const QuestionPendingCard = (props) => {
    return (
        <React.Fragment>
            <div className="jumbotron" style={{'width': '80vw'}} >
                {/* <h1 className="display-4">Hello, world!</h1> */}
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <button className="btn btn-primary btn-lg" role="button">Learn more</button>
            </div>
        </React.Fragment>
    );
}

export default QuestionPendingCard;