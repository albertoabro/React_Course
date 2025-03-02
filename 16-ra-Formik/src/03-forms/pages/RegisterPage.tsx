
import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { formData, name, email, password, password2, handleChange, handleReset } = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const handleSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Name"
                name='name'
                value={name}
                onChange={handleChange}
            />

            <input 
                type="email"
                placeholder="Email"
                name='email'
                value={email}
                onChange={handleChange}
            />

            <input 
                type="password"
                placeholder="Password"
                name='password'
                value={password}
                onChange={handleChange}
            />

            <input 
                type="password"
                placeholder="Confirm Password"
                name='password2'
                value={password2}
                onChange={handleChange}
            />

            <button
                type="submit"
            >
                Register
            </button>

            <button
                type="button"
                onClick={handleReset}
            >
                Reset
            </button>
        </form>
        </div>
    )
}
