import React, {useState, useContext} from "react";
import { Link, Redirect, withRouter  } from 'react-router-dom';
import { Button, TextField } from '@liquid-design/liquid-design-react';
import { authContext } from "./contexts/AuthContext";

function Login({history}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { auth, setAuthData } = useContext(authContext);
    const onFormSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        setAuthData({email, password});

        history.push("/")
      };
      console.log(auth)
    return (
        <form onSubmit={onFormSubmit}>
            <TextField
                placeholder="Add Placeholder Text here"
                label="Text Area label"
                onChange={(e) => setEmail(e)}
                type="email"
                name="email"
            />
            <TextField
                placeholder="Add Placeholder Text here"
                label="Text Area label"
                onChange={(e) => setPassword(e)}
                type="password"
                name="password"
            />
            <Button
                variant="primary"
                type="submit"
          ></Button>
        </form>
    );
}

export default withRouter(Login);