import "./header.css";
import React from "react";
import User from "../Templates/Header/User.jsx";
import Icon from "../Templates/Header/Icon.jsx";
import { ImageProvider } from "../../prosessing/ImageContext.jsx";
import { UserProvider } from "../../prosessing/UserContext.jsx";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <UserProvider>
                    <User />
                </UserProvider>
                <ImageProvider>
                    <Icon />
                </ImageProvider>
            </div>
        );
    }
}

export default Header;
