import { Stack } from "@mui/material";
import React from "react";
import { VideoCardSkeleton } from ".";

const LoadingVideos = ({ direction = "row", align = "start" }) => {
  return (
    <Stack
      direction={direction}
      flexWrap='wrap'
      justifyContent={align}
      alignItems={align}
      gap={2}
    >
      {Array.from({ length: 15 }, (_, i) => (
        <VideoCardSkeleton />
      ))}
    </Stack>
  );
};

export default LoadingVideos;
