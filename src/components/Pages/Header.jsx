import "./header.css";
import React from "react";
import HeaderUser from "../Templates/Header/HeaderUser.jsx";
import HeaderIcon from "../Templates/Header/HeaderIcon.jsx";
import { ImageProvider } from "../../ImageContext.jsx";
import { UserProvider } from "../../UserContext.jsx";

class Header extends React.Component {
    render() {
        return (
            <div className="header" >
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

export default Header;
