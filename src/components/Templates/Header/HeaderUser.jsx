import "./headeruser.css";
import React from "react";
import Part from "../../Parts/Header/Part.jsx";
import { useUserContext } from "../../../UserSetting.jsx";

function User() {
    const { name, description } = useUserContext();

    return (
        <>
            <div className="users">
                <Part name={name} description={description} />
            </div>
        </>
    );
}

export default User;
