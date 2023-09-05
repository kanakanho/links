import "./part.css";
import React from "react";

function Part(props) {
    const { name, description, url } = props;
    //descriptionに"    "が入っているときは改行する
    const descriptionArray = description.split("    ");
    const lenDescriptionArray = descriptionArray.length;

    return (
        <div className="part">
            <img className="icon" src={url} alt="" />
            <h1>{name}</h1>
            {descriptionArray.map((descriptionText, index) => (
                <p key={index}>{descriptionText}</p>
            ))}
        </div>
    );
}

export default Part;
