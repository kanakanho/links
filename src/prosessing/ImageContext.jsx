import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImageContext = () => {
    return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([
        { src: "icon/twitter.jpeg", alt: "Twitter", url: "https://twitter.com/Shiba_ao_" },
        { src: "icon/github.jpeg", alt: "Github", url: "https://github.com/kanakanho" },
        { src: "icon/qiita.jpeg", alt: "Qiita", url: "https://qiita.com/kanakanho" },
        { src: "icon/zenn.jpeg", alt: "Zenn", url: "https://zenn.dev/kanakanho" },
        { src: "icon/youtube.jpeg", alt: "Youtube", url: "https://www.youtube.com/@kanakanho" },
        { src: "icon/note.jpeg", alt: "Blog", url: "https://kanakanho-record.vercel.app" },
    ]);

    return <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>;
};
