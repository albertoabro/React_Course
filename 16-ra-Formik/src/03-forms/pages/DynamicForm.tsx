
import { Form, Formik } from 'formik'
import formJson from '../utils/data/custom-form.json'
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

const initialValues: { [key: string ]: any } = {};
const requiredFields: { [key: string ]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if(rule.type === 'require')
            schema = schema.required('Required');

        if(rule.type === 'minLength')
            schema = schema.min( (rule as any) || 2, `Min of ${(rule as any)} characters`);

        if(rule.type === 'email')
            schema = schema.email('Invalid email address;')

        //... other rules
    }

    requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={ initialValues}
                onSubmit={( values => {
                    console.log(values);
                })}
                validationSchema={ validationSchema}
            >
                {() => (
                    <Form noValidate>
                        { formJson.map( ({ type, name, placeholder, label, options } ) => {

                            if( type === 'input' || type === 'email' || type === 'password')
                                return <MyTextInput key={ name } type={type as any} name={name} label={label} placeholder={placeholder} />
                            
                            else if( type === 'select' )
                                return (
                                    <MySelect key={ name } label={label} name={name}>
                                        <option value=''> Pick a game</option>
                                        {
                                            options?.map( ({id, label}) => (
                                                <option key={ id } value={id}> {label}</option>
                                            ))
                                        }
                                    </MySelect>
                                )
                        }) }

                        <button type='submit'> Submit </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
