import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { CheckCircle, ExpandMore } from "@mui/icons-material";
import { VideoDetailSkeleton, Videos } from "../components";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        data.items.length === 0
          ? navigate("/error")
          : setVideoDetail(data.items[0]);
      })
      .catch(() => navigate("/error"));

    fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <VideoDetailSkeleton />;

  const {
    snippet: { channelId, channelTitle, title, description },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className='react-player'
              url={`https://youtube.com/watch?v=${id}`}
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent='space-between'
              px={2}
              py={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant='subtitle1' color='#fff'>
                  {channelTitle}
                  <CheckCircle
                    sx={{ color: "gray", fontSize: "12px", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction='row'
                sx={{ opacity: 0.7, color: "#fff", gap: 2 }}
              >
                <Typography>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Videos videos={relatedVideos} direction='column' align='center' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
