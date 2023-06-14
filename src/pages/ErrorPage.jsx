import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      height='95vh'
    >
      <CardMedia
        image='https://cdn-icons-png.flaticon.com/512/9841/9841564.png'
        sx={{ width: "200px", height: "200px", mt: "-10vh" }}
      />
      <Typography variant='h5' color='#fff' fontWeight='bold'>
        Content Not Found!
      </Typography>
      <Link to='/' style={{ marginTop: "20px" }}>
        <Button color='error' variant='contained'>
          Home page
        </Button>
      </Link>
    </Stack>
  );
};

export default ErrorPage;
