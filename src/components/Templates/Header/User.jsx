import "./user.css";
import React from "react";
import Info from "../../Parts/Header/info.jsx";
import { useUserContext } from "../../../prosessing/UserContext.jsx";

function User() {
    const { name, description, url } = useUserContext();

    return (
        <>
            <div className="users">
                <Info name={name} description={description} url={url} />
            </div>
        </>
    );
}

export default User;
