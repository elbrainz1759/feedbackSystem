import type { NextPage } from "next";
import { useState } from "react";
import {
  Button,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface loginType {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function getEmail({ currentTarget: input }: { currentTarget: any }) {
    setEmail(input.value);
  }
  function getPassword({ currentTarget: input }: { currentTarget: any }) {
    setPassword(input.value);
  }
  async function saveTask() {
    const data: loginType = {
      email,
      password,
    };
    if (email === "" || password === "")
      return toast.error("All fields are compulsory!");
    try {
      // const saveTodo = await todoService.addTodo(data);
      //  if (!saveTodo) toast.error("Error occured");
      toast.info("Login Successful");
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error("Error occured");
    }
  }
  return (
    <div>
      <h1 style={{color:"#e3242b"}}>Welcome Back!</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
                      variant="standard"
                      label="Enter Username"
            style={{ width: "100%" }}
            placeholder="Enter Email "
            id="newEmail"
            name="newEmail"
            value={email}
            onChange={getEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            variant="standard"
            name="password"
            label="Enter Password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={getPassword}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            style={{
              height: "55px",
              width: "100%",
              marginTop: "5px",
              backgroundColor: "#e3242b",
              color: "white",
              cursor: "pointer",
              border:"2px solid #e3242b"
            }}
            value="Login"
            readOnly
            type="button"
            onClick={saveTask}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginForm;
