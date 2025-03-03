import { useDispatch } from "react-redux";
import { useLanguage } from "../hooks/useLanguage";
import { setLanguage } from "../store/language/languageSlice";

export const LanguageSwitcher = ({ isNavbar = false }) => {
    
    const dispatch = useDispatch();
    const { language, messages } = useLanguage();
    
    const handleLanguageChange = (event) => {
        dispatch( setLanguage( event.target.value ) );
    };
    
    return (
        <div className="container">
            <div className="row d-flex justify-content-end">
                <div className="col-auto"
                    style={{
                        paddingTop: '10px'
                    }}
                >
                    <select 
                        className={`form-select ${isNavbar ? 'form-select-sm' : ''}` }
                        aria-label=".form-select-sm example"
                        value={language}
                        onChange={handleLanguageChange}
                        style={{
                            backgroundColor: isNavbar ? '#343a40' : '',
                            borderColor: isNavbar ? '#343a40' : '',      
                            color: isNavbar ? 'bg-dark' : '',                
                            minWidth: isNavbar ? '120px' : 'auto', 
                        }}
                    >
                        <option value="es">{ messages.spanish }</option>
                        <option value="en">{ messages.english }</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
