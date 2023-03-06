import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Typography, MenuItem, Select } from "@mui/material";
//import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../actions/userActions'



const Register = ({ history }) => {

  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  //  const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error } = useSelector(state => state.auth);

    
    useEffect(() => {

        if (isAuthenticated) {
          console.log("isAuthenticated", isAuthenticated)
            history.push("/")
          }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch,  isAuthenticated, error, history ])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("register", e)
        dispatch(register({name, email, password, role}))
        //window.alert($(e.target.name), 'is registered')
        window.location.reload();
    }

    return (
                        
      <div className="row wrapper">
      <form className="shadow-lg" onSubmit={submitHandler}>                  
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
                            
        <Typography variant="h2">Register</Typography>
        <TextField
            name="Name"
            type="name"
            id="name_field"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            placeholder="Name"
            margin="normal"
        />


        <TextField
            name="Email"
            type="email"
            id="email_field"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            placeholder="Email"
            margin="normal"
        />
                                
                                
        <TextField
            name="Password"
            type="password"
            id="password_field"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            placeholder="Password"
            margin="normal"
        />
        
         <Select
            lable="Role"
            type="role"
            id="role_field"
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            //variant="outlined"
            placeholder="Role"
            margin="normal"
            sx={{
              width: 220,
              height: 50,
            }}
        >
  <MenuItem value="user">User</MenuItem>
  <MenuItem value="superadmin">Superadmin</MenuItem>
  <MenuItem value="statelevelhead">Statelevelhead</MenuItem>
  <MenuItem value="statelevelcoordinators">Statelevelcoordinators</MenuItem>
  <MenuItem value="districtlevel">Districtlevel</MenuItem>
  <MenuItem value="areahead">Areahead</MenuItem>
  <MenuItem value="designers">Designers</MenuItem>
  <MenuItem value="postchecker">Postchecker</MenuItem>

  </Select>                              
        <Button
            id="login_button"
            type="submit"
            className="btn btn-block py-3"
        >
        REGISTER
        </Button>
        </Box>
        </form>
      </div>
                    

               
    )
}

export default Register;
