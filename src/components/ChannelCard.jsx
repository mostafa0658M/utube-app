import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";
import React from "react";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, margin }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "20px",
        margin: "auto",
        height: "306px",
        width: { sm: "358px", md: "320px" },
        margin: { xs: "auto", sm: margin || 0 },
      }}
    >
      <Link
        to={
          channelDetail?.id?.channelId
            ? `/channel/${channelDetail?.id?.channelId}`
            : ""
        }
      >
        <CardContent
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "1px solid #3d3d3d",
              mb: 2,
            }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "14px", ml: "5px", color: "gray" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontWeight: 500, fontSize: "15px", color: "gray" }}
            >
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
