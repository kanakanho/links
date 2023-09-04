import "./text.css";
import React from "react";

function Text(props) {
    // propsの中身がtitle:ならh3, article:ならpを返す
    const { title, article } = props;
    if (title) {
        return (
            <div className="text">
                <h3>{`${title}`}</h3>
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
