import { Box } from "@mui/material";
import foto from "../../assets/hero.svg";
import foto2 from "../../assets/capri.jpg";

const Hero = () => {
  return (
    <Box
      sx={{
        height: { xs: "430px", sm: "600px", md: "100vh" },
        background: { xs: `url(${foto})`, md: `url(${foto2})` },
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: "cover", md: "cover" },
        backgroundPosition: { xs: "center", md: "center" },
        filter: { md: "grayscale(1)" },
      }}
    >
    </Box>
  );
};

export default Hero;
