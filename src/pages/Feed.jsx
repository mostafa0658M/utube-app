import { Alert, AlertTitle, Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Sidebar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState();
  const alertRef = useRef();
  useEffect(() => {
    setVideos(() => null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
      .catch(() => {
        alertRef.current.classList.add("active-alert");
      });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Alert
        severity='error'
        sx={{
          width: { xs: "80%", md: "300px" },
          position: "fixed",
          bottom: "10px",
          right: "-100%",
          zIndex: 10,
          transition: "right 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
        }}
        ref={alertRef}
      >
        <AlertTitle>API quota reached!</AlertTitle>
        try again later.
      </Alert>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography variant='body2' sx={{ color: "#fff", mt: 1.5 }}>
          Copyright 2023 Mostafa Maher
        </Typography>
      </Box>
      <Box p={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
