import { useState } from "react";
import { Box, Button, TextField,useTheme} from '@mui/material';
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
// import { colorModeContext,tokens } from "../../theme";


const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address1:"",
    address2:"",

}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp,"phone number is not valid").required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
    
});

const Form =() =>{
    const isNonMobile = useMediaQuery("(min-width:600px)");
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    const handleFormSubmit =(values)=>{
        console.log(values);
    }



    return (
        <Box m ="20px">
            <Header title ="CREATE USER" subtitle ="Create a new user profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({values, 
                    errors, 
                    touched, 
                    handleBlur, 
                    handleChange,
                    handleSubmit}) =>(
                    <form onSubmit={handleSubmit} >
                        <Box 
                        display="grid" 
                        gap="20px" 
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div":{gridColumn:isNonMobile ? undefined : "span 4"},
                        }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                lable="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                id="firstName"
                                placeholder="Enter your first name"
                                error ={!!touched.firstName && !!errors.firstName}
                                helperText ={touched.firstName && errors.firstName}
                                sx={{
                                    gridColumn:"span 2"
                                }} 
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                lable="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                id="lastName"
                                placeholder="Enter your last name"
                                error ={!!touched.lastName && !!errors.lastName}
                                helperText ={touched.lastName && errors.lastName}
                                sx={
                                    {gridColumn:"span 2"}
                                } 
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                lable="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                id="email"
                                placeholder="Enter your email name"
                                error ={!!touched.email && !!errors.email}
                                helperText ={touched.email && errors.email}
                                sx={
                                    {gridColumn:"span 4"}
                                } 
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                lable="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                id="contact"
                                placeholder="Enter your contact number"
                                error ={!!touched.contact && !!errors.contact}
                                helperText ={touched.contact && errors.contact}
                                sx={
                                    {gridColumn:"span 4"}}
                                
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                lable="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                id="address1"
                                placeholder="Enter your address"
                                error ={!!touched.address1 && !!errors.address1}
                                helperText ={touched.address1 && errors.address1}
                                sx={
                                    {gridColumn:"span 4"}
                                } 
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                lable="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                id="address2"
                                placeholder="Enter your second address"
                                error ={!!touched.address2 && !!errors.address2}
                                helperText ={touched.address2 && errors.address2}
                                sx={
                                    {gridColumn:"span 4"}
                                }
                                
                            />
                            

                        </Box>
                        <Box display="flex"justifyContent="end" mt="20px">
                            <Button type = "submit" color="secondary" variant="contained">
                                Create New User 
                            </Button>
                        </Box>
                    </form>
                )}

            </Formik>

        </Box>
    )
}
export default Form;