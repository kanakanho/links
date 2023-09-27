import "./icon.css";
import React from "react";
import Icon from "../../parts/header/icon";
import Data from "../../../data.json";

function HeaderIcon() {
    const dataObj = Data[0];
    const images = dataObj.Links;

    return (
        <>
            <div className="header-icon">
                {images.map((image, index) => (
                    <Icon key={index} alt={image.alt} url={image.url} />
                ))}
            </div>
        </>
    );
}

export default HeaderIcon;
