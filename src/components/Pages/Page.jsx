import "./page.css";
import React from "react";
import HeaderUser from "../Templates/Header/HeaderUser.jsx";
import HeaderIcon from "../Templates/Header/HeaderIcon.jsx";
import { ImageProvider } from "../../ImageContext.jsx";
import { UserProvider } from "../../UserSetting.jsx";

class Page extends React.Component {
    render() {
        return (
            <div className="page" style={{ background: "url(./img/flower.jpeg) center/cover" }}>
                <UserProvider>
                    <HeaderUser />
                </UserProvider>
                <ImageProvider>
                    <HeaderIcon />
                </ImageProvider>
            </div>
        );
    }
}

export default Page;
