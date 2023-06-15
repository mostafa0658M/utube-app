import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import {
  ChannelDetail,
  ErrorPage,
  Feed,
  PlaylistDetail,
  SearchFeed,
  VideoDetail,
} from "./pages";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation()]);
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/playlist/:id' element={<PlaylistDetail />} />
          <Route path='/search/:searchKey' element={<SearchFeed />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
