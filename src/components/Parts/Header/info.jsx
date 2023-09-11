import "./info.css";
import React from "react";

function Info(props) {
    const { name, description, url } = props;
    //descriptionに"\n"が入っているときは改行する
    const descriptionArray = description.split("\n");

    return (
        <div className="part">
            <img className="icon" src={url} alt="userIcon" />
            <h1>{name}</h1>
            {descriptionArray.map((descriptionText, index) => (
                <p key={index}>{descriptionText}</p>
            ))}
        </div>
    );
}

export default Info;
