import "./text.css";
import React from "react";

function Text(props) {
    // propsの中身がtitle:ならh3, article:ならpを返す
    const { title, article } = props;
    if (title) {
        return (
            <div className="text">
                <h2>{`${title}`}</h2>
            </div>
        );
    } else if (article) {
        return (
            <div className="text">
                <p>{`${article}`}</p>
            </div>
        );
    } else {
        return NaN;
    }
}

export default Text;
