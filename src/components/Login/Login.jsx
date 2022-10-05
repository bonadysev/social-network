
// import React from 'react';
// import {Field, reduxForm} from "redux-form";
//
// const LoginForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field placeholder={"Login"} name={"login"} component={"input"}/>
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"} component={"input"}/>
//             </div>
//             <div>
//                 <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
//
// const Login = (props) => {
//     const onSubmit = (formData)=> {
//     }
//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// }
//
// export default Login
//todo redux-form



//todo Formik
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";


const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape( {

    password: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .max( 5, "Must be shorter than 5 characters" )
        .required( "Required" )
} );


const Login = (props) => {

    return (
        <div>
            <h2> LOGIN </h2>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}
                onSubmit={(values) => {
                    console.log( values )
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name={'email'}
                                type={'text'}
                                placeholder={'e-mail'} />
                        </div>
                        <ErrorMessage name="email" component="div" />

                        <div>
                            <Field
                                name={'password'}
                                type={'password'}
                                placeholder={'password'} />
                        </div>
                        <ErrorMessage name="password" component="div" />

                        <div>
                            <Field
                                type={'checkbox'}
                                name={'rememberMe'}
                                id='rememberMe' />
                            <label htmlFor={'rememberMe'}> remember me </label>
                        </div>

                        <button type={'submit'}>Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;