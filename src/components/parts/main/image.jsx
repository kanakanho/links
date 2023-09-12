import "./image.css";
import React from "react";

function Image(props) {
    const { image: url } = props;
    return (
        <div>
            <img className="image" src={`${url}`} alt="" />
        </div>
    );
}

export default Image;
