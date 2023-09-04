import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImageContext = () => {
    return useContext(ImageContext);
};

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([
        { src: "1.png", alt: "Image 1" },
        { src: "2.png", alt: "Image 2" },
        { src: "3.png", alt: "Image 3" },
        { src: "4.png", alt: "Image 4" },
        { src: "5.png", alt: "Image 5" },
        { src: "6.png", alt: "Image 6" },
        { src: "7.png", alt: "Image 7" },
        { src: "8.png", alt: "Image 8" },
    ]);

    return <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>;
};
