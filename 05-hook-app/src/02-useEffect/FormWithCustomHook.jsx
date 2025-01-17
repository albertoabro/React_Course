
import { useForm } from '@/hooks/useForm'
import '@/index.css'

export const FormWithCustomHook = () => {

    const { formState, username, email, password, onInputChange, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState;

    return (
        <>
            <h1>Custom Hook Form</h1>
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

            <input
                type="password"
                className="form-input-SimpleForm"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className='form-input-SimpleForm' onClick={onResetForm}>Clean</button>
        </>
    )
}