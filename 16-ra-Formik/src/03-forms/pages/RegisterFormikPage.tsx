

import { Form, Formik } from 'formik';

import { MyTextInput } from '../components/MyTextInput';

import '../styles/styles.css';
import { registerFormikValidation } from '../utils/registerFormikValidation';

export const RegisterFormikPage = () => {


    return (
        <div>
        <h1>Register Formik</h1>

        <Formik
            initialValues={{
                name: '',
                email: '',
                password: '',
                password2: '',
            }}
            onSubmit={( values => {
                console.log(values);
            })}
            validationSchema={registerFormikValidation}
        >

        {() => (
            <Form>
                <MyTextInput label='Name' name='name' type='text'/>
                <MyTextInput label='Email' name='email' type='email'/>
                <MyTextInput label='Password' name='password' type='password'/>
                <MyTextInput label='Confirm Password' name='password2' type='password'/>
                
                <button type="submit"> Register </button>

                <button type="reset"> Reset </button>
            </Form>
        )}

        </Formik>
        </div>
    )
}
