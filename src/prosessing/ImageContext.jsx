import React, { createContext, useContext, useState, useEffect } from "react";

const ImageContext = createContext();

export const useImageContext = () => {
    return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();

                // ここで必要なデータを選択し、images ステートにセット
                const imageList = data.map((dataItem) => dataItem.Links).flat();

                setImages(imageList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // fetchData 関数を呼び出し、データを取得
    }, []); // 空の依存リストを渡すことで初回のみ実行

    return <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>;
};
