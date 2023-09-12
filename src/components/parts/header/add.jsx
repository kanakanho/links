import "./icon.css";
import React from "react";
import { useImageContext } from "../../../prosessing/ImageContext.jsx";

function Icon(props) {
    const { src, alt } = props;
    const { images } = useImageContext();

    // src と alt プロパティを使用して特定の画像情報を取得
    const imageInfo = images.find((image) => image.src === src);

    return (
        <div className="image-part" id="addLink">
            <img className="icon" src={`./img/${src}`} alt={alt} />
            <p>{imageInfo.alt}</p>
        </div>
    );
}

export default Icon;
