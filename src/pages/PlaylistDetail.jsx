import { Box, CardMedia, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelCard, Videos } from "../components";
import {
  demoChannelTitle,
  demoPlaylistTitle,
  demoChannelUrl,
  demoPlaylistThumbnailUrl,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const PlaylistDetail = () => {
  const { id } = useParams();
  const [playlistDetail, setPlaylistDetail] = useState(null);
  const [playlistVideos, setPlaylistVideos] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetchFromAPI(`playlists?part=snippet&id=${id}`)
      .then((data) => {
        data.items.length === 0
          ? navigate("/error")
          : setPlaylistDetail(data.items[0]);
      })
      .catch(() => navigate("/error"));
    fetchFromAPI(`playlistItems?part=snippet&playlistId=${id}`).then((data) =>
      setPlaylistVideos(data.items)
    );
  }, [id]);
  const title =
    (playlistDetail?.snippet?.title.slice(0, 60) ||
      demoPlaylistTitle.slice(0, 60)) +
    ((
      playlistDetail?.snippet?.title.slice(0, 60) ||
      demoPlaylistTitle.slice(0, 60)
    ).length >= 60
      ? "..."
      : "");
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack
        direction={{ sx: "column", md: "row" }}
        justifyContent='center'
        width='100%'
        position='relative'
        py={4}
        sx={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          alignItems: { xs: "center", md: "start" },
          textAlign: { xs: "center", md: "start" },
        }}
        mb={4}
      >
        <CardMedia
          image={
            playlistDetail?.snippet?.thumbnails?.high?.url ||
            demoPlaylistThumbnailUrl
          }
          sx={{ height: 180, width: "320px", borderRadius: "10px" }}
        />
        <Stack direction='column' width='320px' p={2}>
          <Typography color='white' variant='h5' fontWeight='bold'>
            {title}
          </Typography>
          <Link
            to={`/channel/${
              playlistDetail?.snippet?.channelId || demoChannelUrl
            }`}
          >
            <Typography color='#ffffffba' variant='subtitle1' fontWeight='bold'>
              {playlistDetail?.snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pb: 2,
        }}
      >
        <Videos videos={playlistVideos} align='center' />
      </Box>
    </Box>
  );
};

export default PlaylistDetail;
