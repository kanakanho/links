import "./textbox.css";
import React from "react";
import Movie from "../../Parts/Main/Movie";
import Image from "../../Parts/Main/Image";
import Text from "../../Parts/Main/Text";
import Margin from "../../Parts/Main/Margin";
import { useTextBoxContext } from "../../../prosessing/TextBoxContext";

function TextBox() {
    const { texts } = useTextBoxContext();

    return (
        <div className="textBox">
            {texts.map((textData, index) => (
                <>
                    <div key={index} className={textData.margin !== "" ? "margin" : "box"}>
                        {textData.movie && <Movie movie={textData.movie} />}
                        {textData.image && <Image image={textData.image} />}
                        {textData.title && <Text title={textData.title} />}
                        {textData.article && <Text article={textData.article} />}
                        {textData.margin && <Margin margin={textData.margin} />}
                    </div>
                    <div className="padding"></div>
                </>
            ))}
        </div>
    );
}

export default TextBox;
