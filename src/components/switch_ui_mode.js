import React from "react";

const Switch_ui=()=>{
    return(
        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default Switch_ui