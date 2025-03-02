
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>
            
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

                            <MyTextInput label='First Name' name='firstName' type='text'/>
                            <MyTextInput label='Last Name' name='lastName' type='text'/>
                            <MyTextInput label='Email' name='email' type='email'/>
                                                        
                            <MySelect label='jobType' name='jobType'>
                                <option value=''> Pick a job type </option>
                                <option value='developer'> Developer </option>
                                <option value='designer'>  Designer </option>
                                <option value='it-senior'> IT. Senior </option>
                                <option value='it-junior'> IT. Junior </option>
                            </MySelect>
        
                            <MyCheckbox label='Terms & Conditions' name='terms'/>

                            <button type='submit'> Submit </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
