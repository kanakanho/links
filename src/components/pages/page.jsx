import "./page.css";
import React from "react";
import Header from "./header";
import Main from "./main";

class Page extends React.Component {
    render() {
        return (
            <div className="page" style={{ background: "url(./img/blue.jpeg) center/cover" }}>
                <Header />
                <Main />
            </div>
        );
    }
}

export default Page;
