import { createContext } from "react";

export const LanguageContext = createContext({
    language: 'es', 
    changeLanguage: () => {},
    messages: {},
});

