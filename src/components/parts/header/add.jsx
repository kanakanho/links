import "./icon.css";
import React from "react";

function Icon(props) {
    const { src, alt } = props;

    return (
        <div className="image-part" id="addLink">
            <img className="icon" src={`./img/${src}`} alt={alt} />
            <p>{alt}</p>
        </div>
    );
}

export default Icon;
