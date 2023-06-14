import { Card, CardContent, Skeleton } from "@mui/material";

const videoCardSkeleton = () => {
  return (
    <Card
      sx={{
        width: { sm: "358px", md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: { sx: 0, sm: "10px" },
        border: "none",
        background: "gray",
      }}
    >
      <Skeleton
        variant='rectangular'
        width='100%'
        height={180}
        animation='wave'
      />
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "86px" }}>
        <Skeleton
          variant='rectangular'
          animation='false'
          width='70%'
          height='14px'
          sx={{ background: "gray", mb: 2 }}
        />
        <Skeleton
          variant='rectangular'
          animation='false'
          width='35%'
          height='12px'
          sx={{ background: "gray" }}
        />
      </CardContent>
    </Card>
  );
};

export default videoCardSkeleton;
