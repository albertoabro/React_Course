import { registerLocale } from "react-datepicker";
import { es, enUS } from 'date-fns/locale';

const localeMap = {
    "en-US": enUS,
    "en": enUS,
    "es-ES": es,
    "es": es,
};

export const getLocale = (language) => {
    const locale = localeMap[language || es];
    registerLocale( language, locale );
    return locale;
};
