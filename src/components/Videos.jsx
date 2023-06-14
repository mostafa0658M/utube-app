import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import { VideoCard, ChannelCard, PlaylistCard, LoadingVideos } from "./";

const Videos = ({ videos, direction = "row", align = "start", playlist }) => {
  if (!videos?.length)
    return <LoadingVideos direction={direction} align={align} />;
  return (
    <Stack
      direction={direction}
      flexWrap='wrap'
      justifyContent={align}
      alignItems={align}
      gap={2}
    >
      {videos.map((item, index) => (
        <Fragment key={index}>
          {(item.id.videoId || typeof item.id === "string") && (
            <VideoCard video={item} />
          )}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlaylistCard playlist={item} />}
        </Fragment>
      ))}
    </Stack>
  );
};

export default Videos;
