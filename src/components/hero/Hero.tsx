import { Box } from "@mui/material";
import "./Hero.css";
import foto from "../../assets/hero.svg";
import foto2 from "../../assets/capri.jpg";

// type Props = {
// }

const Hero = () => {
  return (
    <Box
      sx={{
        background: { xs: `url(${foto})`, md: `url(${foto2})` },
        backgroundRepeat: { xs: "no-repeat" },
        height: { xs: "430px", sm: "600px", md: "99vh" },
        backgroundSize: { xs: "cover", md: "cover" },
        backgroundPosition: { xs: "center", md: "center" },
        filter: { xs: "grayscale(0)", md: "grayscale(1)" },
      }}
    ></Box>
  );
};

export default Hero;
