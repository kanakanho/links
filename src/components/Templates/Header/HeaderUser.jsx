import "./headeruser.css";
import React from "react";
import Part from "../../Parts/Header/Part.jsx";
import { useUserContext } from "../../../UserContext.jsx";

function User() {
    const { name, description, url } = useUserContext();

    return (
        <>
            <div className="users">
                <Part name={name} description={description} url={url} />
            </div>
        </>
    );
}

export default User;
