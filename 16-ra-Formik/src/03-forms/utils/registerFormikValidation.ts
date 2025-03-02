import * as Yup from 'yup';

export const registerFormikValidation = () => {

    return ( Yup.object({
        name: Yup.string()
                .required('Required')
                .min(3, 'Must be 2 characters or more')
                .max(20, 'Must be 15 characters or less'),
        email: Yup.string()
                .required('Required')
                .email('Invalid email address'),
        password: Yup.string()
                    .required('Required')
                    .min(6, 'Must be 6 characters or more'),
        password2: Yup.string()
                    .required('Required')
                    .min(6, 'Must be 6 characters or more')
                    .oneOf([Yup.ref ('password')], 'Password does not match')  
    }));
};
