import React, { createContext, useContext, useState } from "react";

const TextBoxContext = createContext();

export const useTextBoxContext = () => {
    return useContext(TextBoxContext);
};

export const TextBoxProvider = ({ children }) => {
    const [texts, setText] = useState([
        // {
        //     image: "https://pbs.twimg.com/media/Fk86-V_aUAA0ZIB?format=jpg&name=4096x4096",
        //     movie: "n8X9_MgEdCg",
        //     title: "My Love music",
        //     article: "Unity is the most famous  in the world. It is a song",
        //     margin: "",
        // },
        {
            image: "https://ait-tgs-tyuukanotatujin.vercel.app/img/image.png",
            movie: "",
            title: "ゲーム 「中華の達人」",
            article: "TGS2023に向けて制作したゲームです。",
            margin: "",
        },
        {
            image: "",
            movie: "8OoMQy0keGE",
            title: "アプリ 「wisdom Tree」",
            article: "技育展2023に向けて開発したアプリです。",
            margin: "",
        },
        {
            image: "https://kanakanho-record.vercel.app/img/geekcamp-0617/paper_app_title.png",
            movie: "",
            title: "アプリ 「かみあぷり」",
            article:
                "技育CAMPキャラバン 福岡 にて最優秀賞、技育CAMP アドバンス にて 企業賞(MIXI賞)を受賞したアプリです。",
            margin: "",
        },
        {
            image: "https://pbs.twimg.com/media/Fk86-V_aUAA0ZIB?format=jpg&name=4096x4096",
            movie: "",
            title: "イラスト 「星空のダンスフロア」",
            article: "illustrator & Photoshop",
            margin: "",
        },
    ]);

    return <TextBoxContext.Provider value={{ texts }}>{children}</TextBoxContext.Provider>;
};
