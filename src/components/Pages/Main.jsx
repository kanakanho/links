import "./main.css";
import React from "react";
import TextBox from "../templates/main/text-box";
import { TextBoxProvider } from "../../prosessing/TextBoxContext.jsx";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <TextBoxProvider>
                    <TextBox />
                </TextBoxProvider>
            </div>
        );
    }
}

export default Main;
