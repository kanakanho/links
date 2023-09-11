import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [name, setName] = useState("User Name");
    const [description, setDescription] = useState("ユーザーの説明文");
    const [url, setIcon] = useState("https://img.icons8.com/?size=1x&id=44200&format=png"); //iconにしたいリンクを貼ってください

    useEffect(() => {
        const fetchData = async () => {
            try {
                // データの読み込み
                const response = await fetch("/src/data.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                // データを更新`
                setName(data[0].Name);
                setDescription(data[0].Discription);
                setIcon(data[0].Icon);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // データの読み込みを実行
        fetchData();
    }, []);

    const updateUser = (name, description, icon) => {
        setName(name);
        setDescription(description);
        setIcon(url);
    };

    return <UserContext.Provider value={{ name, description, url, updateUser }}>{children}</UserContext.Provider>;
};
