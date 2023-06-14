import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      alignItems='center'
      direction='row'
      justifyContent='space-between'
      p={2}
      sx={{
        background: "#000",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Link to='/' style={{ display: "flex" }}>
        <img src={logo} alt='logo' height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
