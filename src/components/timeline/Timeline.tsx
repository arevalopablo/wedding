import { Box } from "@mui/material";

type Props = {
  timelineMobile: string;
  // timelineTablet: string;
  timelineDesktop: string;
};

const Timeline = (props: Props) => {
  const { timelineMobile, timelineDesktop } = props;

  return (
    <Box
      sx={{
        background: {
          xs: `url(${timelineMobile}) #faf6ec`,
          // sm: `url(${timelineTablet})`,
          lg: `url(${timelineDesktop}) #faf6ec`,
          
        },
        backgroundSize:  {xs: 'contain', lg: 'contain'},
        backgroundRepeat: {xs: 'no-repeat', lg: 'no-repeat'},
        backgroundPosition: {xs: 'center', lg: 'center'},
        height: "100vh",

      }}
    ></Box>
  );
};

export default Timeline;
