import React, { useState, Fragment } from "react";
import { Grid, AppBar, Toolbar, Paper, Typography, CircularProgress } from "@mui/material";
import { actionAdminLogin } from "../../../data/user/user.actions";
import { useAppDispatch } from "../../../data/hooks";



interface AdminLoginPageProps {

}


export const AdminLoginPage: React.FC<AdminLoginPageProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useAppDispatch();

  const onChangeUsername = (e: React.ChangeEvent<any>) => {
    setUsername(e.target!.value);
  }

  const onChangePassword = (e: React.ChangeEvent<any>) => {
    setPassword(e.target!.value);
  }

  const onAdminLogin = (e: React.FormEvent<any>) => {
    e.preventDefault();
    var data = {
      "username": username,
      "password": password
    }
    dispatch(actionAdminLogin(data));
  }

  return (
     <Fragment>
       <AppBar>
         <Toolbar>
           <Typography variant="title">
             Admin Login Page
           </Typography>
         </Toolbar>
       </AppBar>
       <Grid container>
         <Grid item>
           <form onSubmit={onAdminLogin}>
             <label>Username: </label>
             <input type="text" value={username} onChange={onChangeUsername} />
             <br />
             <label>Password: </label>
             <input type="password" value={password} onChange={onChangePassword} />
             <button type="submit">Login</button>
           </form>
         </Grid>
       </Grid>
     </Fragment>
  );
}
