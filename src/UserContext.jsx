import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("柴田 青賢");
    const [description, setDescription] = useState("愛知工業大学 情報科学部 情報科学科 1年");
    const [url, setIcon] = useState("https://pbs.twimg.com/profile_images/1673567713954873344/SQymHa9-_400x400.jpg");

    const updateUser = (name, description, icon) => {
        setName(name);
        setDescription(description);
        setIcon(url);
    };

    return <UserContext.Provider value={{ name, description, url, updateUser }}>{children}</UserContext.Provider>;
};
