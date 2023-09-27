import "./header.css";
import React from "react";
import User from "../templates/header/user";
import Icon from "../templates/header/icon";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                    <User />
                    <Icon />
            </div>
        );
    }
}

export default Header;
