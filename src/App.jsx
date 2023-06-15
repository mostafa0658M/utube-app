import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  window.scrollTo(0, 0);
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
