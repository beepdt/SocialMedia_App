import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Dropzone from "react-dropzone";
import FlexBetween from "../../components/FlexBetween";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    picture: yup.string().required("required"),
})

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValueRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    picture: "",
}

const initialValueLogin = {
    email: "",
    password: "",
}

const Form = ()=>{
    const [pageType,setPageType] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const login = async (values, onSubmitProps) => {
        const loggedInResponse = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();
        if (loggedIn) {
          dispatch(
            setLogin({
              user: loggedIn.user,
              token: loggedIn.token,
            })
          );
          navigate("/home");
        }
      };

      const register = async (values, onSubmitProps) => {
        // this allows us to send form info with image
        const formData = new FormData();
        for (let value in values) {
          formData.append(value, values[value]);
        }
        formData.append("picturePath", values.picture.name);
    
        const savedUserResponse = await fetch(
          "http://localhost:5000/auth/register",
          {
            method: "POST",
            body: formData,
          }
        );
        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();
    
        if (savedUser) {
          setPageType("login");
        }
      };

    const handleFormSubmit = async(values, onSubmitProps) => {
        if(isLogin) await login(values,onSubmitProps);
        if(isRegister) await register(values, onSubmitProps);
    };

    return(
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin  ? initialValueLogin : initialValueRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    resetForm,
                })=>(
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4,minmax(0,1fr))"
                                sx={{
                                    "&>div": {gridColumn: isNonMobileScreens ? undefined : "span 4",fontFamily: "Satoshi-Medium"},
                                }}
                            >
                                    {isRegister && (
                                        <>
                                            <TextField
                                                label = "First Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.firstName}
                                                name="firstName"
                                                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                                helperText= {touched.firstName && errors.firstName}
                                                sx={{gridColumn: "span 2",fontFamily: "Satoshi-Medium",fontStyle:"normal"}}
                                            />

                                            <TextField
                                                label = "Last Name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.lastName}
                                                name="lastName"
                                                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                                helperText= {touched.lastName && errors.lastName}
                                                sx={{gridColumn: "span 2"}}
                                            />

                                            <Box
                                                gridColumn="span 4"
                                                border={`1px solid ${palette.neutral.medium}`}
                                                borderRadius="8px"
                                                p="1rem"
                                            >
                                                    <Dropzone
                                                        acceptedFiles = ".jpg,.jpeg,.png"
                                                        multiple = {false}
                                                        onDrop={(acceptedFiles)=>
                                                            setFieldValue("picture",acceptedFiles[0])
                                                        }
                                                    >
                                                            {({getRootProps,getInputProps}) => (
                                                                <Box
                                                                    {...getRootProps()}
                                                                    border={`2px dashed ${palette.primary.main}`}
                                                                    p="1rem"
                                                                    sx={{"&:hover": {cursor: "pointer"}}}
                                                                >
                                                                        <input {...getInputProps()} />
                                                                        {!values.picture ? (
                                                                            <p>Add Picture Here</p>
                                                                        ):(
                                                                            <FlexBetween>
                                                                                <Typography>
                                                                                    {values.picture.name}
                                                                                </Typography>
                                                                                <EditOutlinedIcon/>
                                                                            </FlexBetween>
                                                                        )}
                                                                </Box>
                                                            )}
                                                    </Dropzone>
                                            </Box>
                                        </>
                                    )}

                                    <TextField
                                            label = "Email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.email}
                                            name="email"
                                            error={Boolean(touched.email) && Boolean(errors.email)}
                                            helperText= {touched.email && errors.email}
                                            sx={{gridColumn: "span 2", "& .MuiInputBase-root": { fontFamily: "Satoshi-Medium" }}}
                                    />
                                    <TextField
                                            label = "Password"
                                            type="password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.password}
                                            name="password"
                                            error={Boolean(touched.password) && Boolean(errors.password)}
                                            helperText= {touched.password && errors.password}
                                            sx={{gridColumn: "span 2","& .MuiInputBase-root": { fontFamily: "Satoshi-Medium" }}}
                                    />
                            </Box>

                            {/*Buttons */}
                            <Box>
                                <Button
                                    fullWidth
                                    type= "submit"
                                    sx={{
                                        fontFamily: "Satoshi-Medium",
                                        m: "2rem 0",
                                        p: "1rem",
                                        backgroundColor:palette.primary.main,
                                        color: palette.background.alt,
                                        "&:hover": {color: palette.primary.dark},
                                    }}
                                >
                                        {isLogin ? "LOGIN" : "REGISTER"}
                                </Button>
                                <Typography 
                                    onClick={()=> {
                                        setPageType(isLogin? "register" : "login")
                                        resetForm();
                                    }}
                                    sx={{
                                        fontFamily: "Satoshi-Medium",
                                        textDecoration:"underline",
                                        color: palette.primary.main,
                                        "&:hover":{
                                            cursor:"pointer",
                                            color:palette.primary.light,
                                        },
                                    }}
                                >
                                        {isLogin? "Don't have an accouunt ? Sign up here."
                                                : "Already have an account ? Login here."
                                        }
                                </Typography>
                            </Box>
                            
                        </form>
                )}
        </Formik>
    )
}

export default Form;