import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../utils/constants";

const VideoCard = ({ video: { id, snippet } }) => {
  const title =
    (snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)) +
    ((snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)).length >= 60
      ? "..."
      : "");

  return (
    <Card
      sx={{
        width: { sm: "358px", md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: { sx: 0, sm: "10px" },
        border: "none",
      }}
    >
      <Link
        to={`/video/${
          id?.videoId || snippet?.resourceId?.videoId || demoVideoUrl
        }`}
      >
        <CardMedia
          image={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: "100%",
            height: 180,
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "86px" }}>
        <Link to={`/video/${id?.videoId || id || demoVideoUrl}`}>
          <Typography color='white' variant='subtitle1' fontWeight='bold'>
            {title}
          </Typography>
          <Typography color='gray' variant='subtitle2' fontWeight='bold'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
