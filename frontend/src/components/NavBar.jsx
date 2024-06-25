import React from "react";
import "../components/Navbar.css";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Box
        component="section"
        sx={{ p: 2, border: "2px soild grey", backgroundColor: "#663399" }}
      >
        <Stack direction="row" justifyContent="space-around">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
              Home
            </Typography>
          </Link>
          <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "white", cursor: "pointer" }}>
              Add Product
            </Typography>
          </Link>

          <Typography
            variant="h6"
            sx={{ color: "white", cursor: "pointer" }}
            onClick={toLogin}
          >
            Logout
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
