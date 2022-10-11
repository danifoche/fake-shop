import React from "react"
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center mt-10 mb-20">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingSpinner;