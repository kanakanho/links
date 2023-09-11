import React, { createContext, useContext, useState, useEffect } from "react";

const TextBoxContext = createContext();

export const useTextBoxContext = () => {
    return useContext(TextBoxContext);
};

export const TextBoxProvider = ({ children }) => {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // データの読み込み
                const response = await fetch("/data.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                // ここで必要なデータを選択し、images ステートにセット
                const articles = data.map((dataItem) => dataItem.article).flat();

                // console.log(articles);

                // データをセット
                setTexts(articles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        // データの読み込みを実行
        fetchData();
    }, []);

    return <TextBoxContext.Provider value={{ texts }}>{children}</TextBoxContext.Provider>;
};
