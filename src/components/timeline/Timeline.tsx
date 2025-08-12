import { Box } from "@mui/material";

type Props = {
  timelineMobile: string;
  timelineTablet: string;
  timelineDesktop: string;
};

const Timeline = (props: Props) => {
  const { timelineMobile, timelineDesktop, timelineTablet } = props;

  return (
    <Box
      data-aos='fade-up' data-aos-duration='400'
      sx={{
        background: {
          xs: `url(${timelineMobile}) #faf6ec`,
          sm: `url(${timelineTablet}) #faf6ec`,
          md: `url(${timelineDesktop}) #faf6ec`,
          lg: `url(${timelineDesktop}) #faf6ec`,
          
        },
        backgroundSize:  {xs: 'contain', sm: 'contain', md: '90%', lg: 'contain'},
        backgroundRepeat: {xs: 'no-repeat', sm: 'no-repeat', md: 'no-repeat', lg: 'no-repeat'},
        backgroundPosition: {xs: 'center', sm: 'center', md: 'center', lg: 'center'},
        height: "100vh",

      }}
    ></Box>
  );
};

export default Timeline;
