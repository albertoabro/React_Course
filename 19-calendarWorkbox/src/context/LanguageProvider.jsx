import { useMemo } from "react";
import { getMessagesEN } from "../helpers/getMessagesEN";
import { getMessagesES } from "../helpers/getMessagesES";
import { LanguageContext } from "./LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/language/languageSlice";

export const LanguageProvider = ( { children } ) => {
    const dispatch = useDispatch();
    const language = useSelector( (state) => state.lang.language);

    const messages = useMemo(() => {
        switch (language) {
            case "en":
                return getMessagesEN();
    
            default:
                return getMessagesES();
        }
    }, [language]);

    const changeLanguage = (lang) => dispatch( setLanguage(lang) );

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, messages}}>
            {children}
        </LanguageContext.Provider>
    );
};