
import logo from '../assets/react.svg';

export const ReactLogo = () => {
    return (
        <img src={logo} 
            alt="React Logo"
            style={{
                bottom: '20px',
                right: '20px',
                position: 'fixed',
                width: '130px',
            }}
        />
    )
}
