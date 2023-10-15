import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from "axios";

function RegesterAdmins() {

    const initialValues = {
        name:"",
        username:"",
        email:"",
        password:""
    }

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        username: yup.string().min(5).max(20).required("Username is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().required("Password is required")
    })

    const onSubmit = (data)=>{
        axios.post("http://localhost:3000/users", data).then((response) => {
            console.log("it work");
        });
    }

    return <div className='registerAdminContainer'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Name: </label>
                <ErrorMessage name="name" component="span"/>
                <Field id="inputRegisterAdmin" name="name" />
                <label>Username: </label>
                <ErrorMessage name="username" component="span"/>
                <Field id="inputRegisterAdmin" name="username" />
                <label>Email: </label>
                <ErrorMessage name="email" component="span"/>
                <Field id="inputRegisterAdmin" name="email" />
                <label>Password: </label>
                <ErrorMessage name="password" component="span"/>
                <Field id="inputRegisterAdmin" name="password" />
                <button type='submit'>Register</button>
            </Form>
        </Formik>
    </div>
}

export default RegesterAdmins