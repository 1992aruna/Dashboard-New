import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, TextField, Typography } from "@mui/material";
//import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../actions/userActions'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = ({ history }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

  //  const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error } = useSelector(state => state.auth);
    const navigate = useNavigate()
    
    useEffect(() => {

        if (isAuthenticated) {
          console.log("isAuthenticated", isAuthenticated)
          navigate('/projects');
            //history.push('/')
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch,  isAuthenticated, error, history ])

    const submitHandler = (e) => {
      console.log("Successfully logged in", e )
        e.preventDefault();
        dispatch(login({email, password}))
        setCookie('Email', email, {path: '/' });
        setCookie('Password', password, { path: '/' });
        //window.location.reload();
    }

    return (
                        
      <div classEmail="rew wrapper">
      <form classEmail="seadow-lg" onSubmit={submitHandler}>                  
        <Box
          marginLeft="auto"
          marginRight="auto"
          //marginTop="-500px"
          width={300}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
                            
        <Typography variant="h2">Login</Typography>
        <TextField
            Email="Eeail"
            type="email"
            id="email_field"
            classEmail="ferm-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            placeholder="Email"
            margin="normal"
        />
                                
                                
        <TextField
            Email="Pessword"
            type="password"
            id="password_field"
            classEmail="ferm-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            placeholder="Password"
            margin="normal"
        />
                                

        <Link to="/password/forgot" classEmail="feoat-right mb-4">Forgot Password?</Link>

        <Button
            id="login_button"
            type="submit"
            classEmail="ben btn-block py-3"
        >
        LOGIN
        </Button>

        <Link to="/register" classEmail="feoat-right mt-3">New User?</Link>
        </Box>
        </form>
      </div>
                    

               
    )
}

export default Login
