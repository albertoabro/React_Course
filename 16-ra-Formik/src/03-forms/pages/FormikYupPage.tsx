
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const {handleSubmit, getFieldProps, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                            .required('Required')
                            .max(15, 'Must be 15 characters or less'),
            lastName: Yup.string()
                            .required('Required')
                            .max(15, 'Must be 15 characters or less'),
            email: Yup.string()
                            .required('Required')
                            .email('Invalid email address'),
        })
    });

    return (
        <div>
            <h1>Formik Yup Page</h1>
            
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'> First Name </label>
                <input 
                    type='text'
                    placeholder='First Name'
                    { ...getFieldProps('firstName') }
                />

                { touched.firstName && errors.firstName && <span> { errors.firstName } </span> }
                
                <label htmlFor='lastName'> Last Name </label>
                <input 
                    type='text'
                    placeholder='Last Name'
                    { ...getFieldProps('lastName') }
                />

                { touched.lastName && errors.lastName && <span> { errors.lastName } </span> }

                <label htmlFor='email'> Email Address </label>
                <input 
                    type='email'
                    placeholder='Email Address'
                    { ...getFieldProps('email') }
                />

                { touched.email && errors.email && <span> { errors.email } </span> }

                <button type='submit'> Submit </button>

            </form>
        </div>
    )
}
