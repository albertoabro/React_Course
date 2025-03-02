
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values => {
                    console.log(values);
                })}
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                .required('Required')
                                .max(15, 'Must be 15 characters or less'),

                    lastName: Yup.string()
                                .required('Required')
                                .max(15, 'Must be 15 characters or less'),

                    email: Yup.string()
                              .required('Required')
                              .email('Invalid email address'),

                    terms: Yup.boolean()
                              .oneOf([true], 'The conditions must be accepted'),

                    jobType: Yup.string()
                                .required('Required')
                                .notOneOf(['designer'], 'This option is not valid')
                })}
            >

                { () => (
                        <Form>
                            <label htmlFor='firstName'> First Name </label>
                            <Field name='firstName' type='text'/>
                            <ErrorMessage name='firstName' component='span' />
                            
                            <label htmlFor='lastName'> Last Name </label>
                            <Field name='lastName' type='text'/>
                            <ErrorMessage name='lastName' component='span' />
        
                            <label htmlFor='email'> Email Address </label>
                            <Field name='email' type='email'/>
                            <ErrorMessage name='email' component='span' />
        
                            <label htmlFor='jobType'> Job Type </label>
                            <Field name='jobType' as='select'>
                                <option value=''> Pick a job type </option>
                                <option value='developer'> Developer </option>
                                <option value='designer'>  Designer </option>
                                <option value='it-senior'> IT. Senior </option>
                                <option value='it-junior'> IT. Junior </option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />
        
                            <label>
                                <Field name='terms' type='checkbox'/>
                                Terms and Conditions 
                            </label>
                            <ErrorMessage name='terms' component='span' />

                            <button type='submit'> Submit </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
