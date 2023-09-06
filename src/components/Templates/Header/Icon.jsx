import "./icon.css";
import React from "react";
import Icon from "../../Parts/Header/Icon.jsx";
import { useImageContext } from "../../../prosessing/ImageContext.jsx";

function HeaderIcon() {
    const { images } = useImageContext();

    return (
        <>
            <div className="header-icon">
                {images.map((image, index) => (
                    <Icon key={index} src={image.src} alt={image.alt} url={image.url} />
                ))}
            </div>
        </>
    );
}

export default HeaderIcon;
