import "./main.css";
import React from "react";
import TextBox from "../templates/main/text-box";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <TextBox />
            </div>
        );
    }
}

export default Main;
