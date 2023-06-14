import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ChannelCard, Videos } from "../components";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        data.items.length === 0
          ? navigate("/error")
          : setChannelDetail(data.items[0]);
      })
      .catch(() => navigate("/error"));
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setChannelVideos(data.items)
    );
  }, [id]);
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            width: "100%",
            height: "300px",
            marginBottom: "-93px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} margin='auto' />
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Videos videos={channelVideos} align='center' />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
