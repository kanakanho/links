import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("name1");
    const [description, setDescription] = useState("description1");

    const updateUser = (name, description) => {
        setName(name);
        setDescription(description);
    };

    return <UserContext.Provider value={{ name, description, updateUser }}>{children}</UserContext.Provider>;
};
