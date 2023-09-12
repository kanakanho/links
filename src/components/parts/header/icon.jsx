import "./icon.css";
import React from "react";
import { useImageContext } from "../../../prosessing/ImageContext.jsx";

function Icon(props) {
    const { alt, url } = props;
    const { images } = useImageContext();

    // alt プロパティを使用して特定の画像情報を取得
    const imageInfo = images.find((image) => image.alt === alt);

    if (imageInfo.alt !== "Plus") {
        return (
            <a href={`${url}`}>
                <div className="image-part">
                    <img className="icon" src={`./img/icon/${alt}.png`} alt={alt} />
                    <p>{imageInfo.alt}</p>
                </div>
            </a>
        );
    } else if (imageInfo.url === "") {
        if (imageInfo.alt === "Plus") {
            return (
                <div className="image-part" id="plus">
                    <img className="icon" src={`./img/icon/${alt}.png`} alt={alt} />
                    <p>リンクを追加</p>
                </div>
            );
        } else {
            return (
                <div className="image-part" id="card">
                    {console.log(imageInfo.alt)}
                    <img className="icon" src={`./img/icon/${alt}.png`} alt={alt} />
                </div>
            );
        }
    }
}

export default Icon;
