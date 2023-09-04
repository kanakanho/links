import "./part.css";
import React from "react";

function Part(props) {
    const { name, description } = props;

    return (
        <div className="part">
            <h1>{`${name}`}</h1>
            <p>{`${description}`}</p>
        </div>
    );
}

export default Part;
