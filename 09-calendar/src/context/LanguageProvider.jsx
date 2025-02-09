import { useState, useMemo } from "react";
import { getMessagesEN } from "../helpers/getMessagesEN";
import { getMessagesES } from "../helpers/getMessagesES";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ( { children } ) => {
    const [ language, setLanguage ] = useState("es");

    const messages = useMemo(() => {
        switch (language) {
            case "en":
                return getMessagesEN();
    
            default:
                return getMessagesES();
        }
    }, [language]);

    const changeLanguage = (lang) => setLanguage(lang);

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, messages}}>
            {children}
        </LanguageContext.Provider>
    );
};