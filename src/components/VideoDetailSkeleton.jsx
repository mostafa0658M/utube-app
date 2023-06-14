import { Box, Skeleton, Stack } from "@mui/material";
import { Videos } from ".";
const VideoDetailSkeleton = () => {
  return (
    <Box sx={{ minHeight: "95vh" }} background='gray'>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <Skeleton
              variant='rounded'
              className='react-player'
              sx={{ background: "gray" }}
              animation='wave'
            />
            <Skeleton
              variant='rectangular'
              animation={false}
              height='20px'
              width='70%'
              sx={{ background: "gray", my: "16px", mx: "8px" }}
            />
            <Stack direction='row' justifyContent='space-between' px={1}>
              <Skeleton
                variant='rectangular'
                animation={false}
                height='14px'
                width='100px'
                sx={{ background: "gray" }}
              />
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          alignItems='center'
          justifyContent='center'
        >
          <Videos direction='column' align='center' />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetailSkeleton;
