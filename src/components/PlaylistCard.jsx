import { PlaylistPlay } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import {
  demoPlaylistTitle,
  demoPlaylistUrl,
  demoThumbnailUrl,
} from "../utils/constants";
import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({
  playlist: {
    id: { playlistId },
    snippet,
  },
}) => {
  const title =
    (snippet?.title.slice(0, 60) || demoPlaylistTitle.slice(0, 60)) +
    ((snippet?.title.slice(0, 60) || demoPlaylistTitle.slice(0, 60)).length >=
    60
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
      <Link to={playlistId ? `/playlist/${playlistId}` : demoPlaylistUrl}>
        <CardMedia
          image={snippet?.thumbnails?.medium?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: "358px",
            height: 180,
          }}
        />
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{
            py: 1,
            px: 2,
            mt: "-40px",
            boxSizing: "border-box",
            bottom: 0,
            left: 0,
            background: "#0000ff60",
            color: "#fff",
            backdropFilter: "blur(2px)",
          }}
        >
          <Typography variant='subtitle2'>Playlist</Typography>
          <PlaylistPlay />
        </Stack>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "86px" }}>
        <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
          <Typography color='white' variant='subtitle1' fontWeight='bold'>
            {title}
          </Typography>
          <Typography color='gray' variant='subtitle2'>
            open the playlist
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
