import "./icon.css";
import React from "react";
import Icon from "../../parts/header/icon";
import { useImageContext } from "../../../prosessing/ImageContext";

function HeaderIcon() {
    const { images } = useImageContext();

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
