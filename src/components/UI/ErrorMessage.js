import React from "react";

const ErrorMessage = ({message}) => {
    return(
        <div className="container alert-container">
            <div className="row">
                <div className="alert alert-danger" role="alert">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default ErrorMessage;