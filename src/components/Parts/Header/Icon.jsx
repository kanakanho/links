import "./icon.css";
import React from "react";
import { useImageContext } from "../../../prosessing/ImageContext.jsx";

function Icon(props) {
    const { src, alt, url } = props;
    const { images } = useImageContext();

    // src と alt プロパティを使用して特定の画像情報を取得
    const imageInfo = images.find((image) => image.src === src);

    return (
        <a href={`${url}`}>
            <div className="image-part">
                <img className="icon" src={`./img/${src}`} alt={alt} />
                <p>{imageInfo.alt}</p>
            </div>
        </a>
    );
}

export default Icon;
