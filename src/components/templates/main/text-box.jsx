import "./textbox.css";
import React from "react";
import Movie from "../../parts/main/movie";
import Image from "../../parts/main/image";
import Text from "../../parts/main/text";
import Margin from "../../parts/main/margin";
import Data from "../../../data.json";

function TextBox() {
    const dataObj = Data[0];
    const texts = dataObj.article;

    return (
        <div className="textBox">
            <div className="title">
                <p>Products</p>
                <div className="padding"></div>
            </div>
            {texts.map((textData, index) => (
                <a key={index} href={textData.link} rel="noopener noreferrer">
                    <div key={index} className={textData.margin !== "" ? "margin" : "box"}>
                        {textData.movie && <Movie movie={textData.movie} />}
                        {textData.image && <Image image={textData.image} />}
                        {textData.title && <Text title={textData.title} />}
                        {textData.article && <Text article={textData.article} />}
                        {textData.margin && <Margin margin={textData.margin} />}
                    </div>
                    <div className="padding"></div>
                </a>
            ))}
        </div>
    );
}

export default TextBox;
