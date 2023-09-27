import "./icon.css";
import React from "react";

function Icon(props) {
    const { alt, url } = props;

    if (alt !== "Plus") {
        return (
            <a href={`${url}`}>
                <div className="image-part">
                    <img className="icon" src={`./img/icon/${alt}.png`} alt={alt} />
                    <p>{alt}</p>
                </div>
            </a>
        );
    } else if (url === "") {
        if (alt === "Plus") {
            return (
                <div className="image-part" id="plus">
                    <img className="icon" src={`./img/icon/${alt}.png`} alt={alt} />
                    <p>リンクを追加</p>
                </div>
            );
        } else {
            return (
                <div className="image-part" id="card">
                    {console.log(alt)}
                    <img className="icon" src={`./img/icon/${alt}.png`} alt={alt} />
                </div>
            );
        }
    }
}

export default Icon;
