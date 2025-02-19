
import '@/index.css'
import { useState, useEffect } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Alberto',
        email: 'test@react.com'
    });

    const { username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;

        setFormState({
            ...formState,
            [name]:value
        });
    }

    useEffect( () => {

    }, [])

    useEffect( () => {

    }, [formState])
    
    useEffect( () => {

    }, [email])

    return (
        <>
            <h1>Simple Form Hook</h1>
            <hr />
            <input 
                type="text"
                className='button'
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            
            <input 
                type="email"
                className="form-input-SimpleForm"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === "AlbertoAbro") && <Message />
            }
        </>
    )
}