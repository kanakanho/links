import "./textbox.css";
import React from "react";
import Movie from "../../Parts/Main/Movie";
import Image from "../../Parts/Main/Image";
import Text from "../../Parts/Main/Text";
import Margin from "../../Parts/Main/Margin";
import { useTextBoxContext } from "../../../TextBoxContext";

function TextBox() {
    const { texts } = useTextBoxContext();

    return (
        <div className="textBox">
            {texts.map((textData, index) => (
                <div className="box" key={index}>
                    {textData.movie && <Movie movie={textData.movie} />}
                    {textData.image && <Image image={textData.image} />}
                    {textData.title && <Text title={textData.title} />}
                    {textData.article && <Text article={textData.article} />}
                    {textData.margin && <Margin />}
                </div>
            ))}
        </div>
    );
}

export default TextBox;
