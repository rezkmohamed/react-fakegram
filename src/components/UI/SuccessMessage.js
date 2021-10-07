import React from "react";
import globalClasses from '../../assets/global-styles/bootstrap.min.module.css';

const SuccessMessage = ({message}) => {
    return (
        <div className={`${globalClasses.container} ${globalClasses['alert-container']}`}>
            <div className="row">
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default SuccessMessage;