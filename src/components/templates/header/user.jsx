import "./user.css";
import React from "react";
import Info from "../../parts/header/info";
import Data from "../../../data.json";

function User() {
    const dataObj = Data[0];

    return (
        <>
            <div className="users">
                <Info name={dataObj.Name} description={dataObj.Description} url={dataObj.Icon} />
            </div>
        </>
    );
}

export default User;
