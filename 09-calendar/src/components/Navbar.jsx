
export const Navbar = ({ onChangeLanguage, messages, language }) => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 ">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            Alberto
        </span>

        <select onChange={(e) => onChangeLanguage(e.target.value)} value={language}>
            <option value="es">{ messages.spanish }</option>
            <option value="en">{ messages.english }</option>
        </select>

        <button className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt">
                <span> { messages.logout } </span>
            </i>    
        </button>      
    </div>
  )
}
