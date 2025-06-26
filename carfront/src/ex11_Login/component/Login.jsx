import { useState } from "react";
import { SERVER_URL } from "./constants";
import { Button, TextField, Stack } from "@mui/material";

const Login = ()=>{

    return(
        <div>
            <Stack spacing={2} alignItems="center" mt={2}>
                <TextField name="username" label="username" />
                <TextField name="password" label="password" type="password" />
                <Button variant="outlined" color="primary">Login</Button>
            </Stack>
        </div>
    )
}

export default Login;