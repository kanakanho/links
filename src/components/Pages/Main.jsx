import "./main.css";
import React from "react";
import TextBox from "../Templates/Main/TextBox";
import { TextBoxProvider } from "../../TextBoxContext.jsx";

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
