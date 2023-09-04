import "./part.css";
import React from "react";

function Part(props) {
    const { name, description, url } = props;

    return (
        <div className="part">
            <img className="icon" src={url} alt="" />
            <h1>{`${name}`}</h1>
            <p>{`${description}`}</p>
        </div>
    );
}

export default Part;
