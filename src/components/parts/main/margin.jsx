import "./margin.css";
import React from "react";

function Margin(props) {
    const { margin:text } = props;
    return <div className={`${text}`}></div>;
}

export default Margin;
