import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useLoginStore from "../store/login-store";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Myloginform() {
  const { setToggle } = useLoginStore();

  const { register, handleSubmit, reset } = useForm();
  // get data from form in ajon
  const tologin = async (data) => {
    try {
      let res = await axios.post("http://localhost:2010/user/login", data);
      console.log(res);
      alert("success");
    } catch (error) {
      alert("failed to login");
    }
  };

  return (
    <>
      <Container>
        <Box height={400} width={400} m={4}>
          <Typography variant="h3" align="center" sx={{ marginY: 3 }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(tologin)}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email")}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register("password")}
              />
              <Button variant="contained" type="submit">
                Login
              </Button>
            </Stack>
          </form>
          <Typography align="center" varient="subtitle1">
            New?{" "}
            <Link onClick={setToggle} style={{ textDecoration: "none" }}>
              signup here
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
