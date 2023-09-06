import "./header.css";
import React from "react";
import HeaderUser from "../Templates/Header/User.jsx";
import HeaderIcon from "../Templates/Header/Icon.jsx";
import { ImageProvider } from "../../prosessing/ImageContext.jsx";
import { UserProvider } from "../../prosessing/UserContext.jsx";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
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
