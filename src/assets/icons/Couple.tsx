import { Player } from "@lottiefiles/react-lottie-player";
import couple from "./Couple Walk.json";
import { Box } from "@mui/material";

const Couple = () => {
  return (
    <Box  >
      <Player src={couple} autoplay loop/>
    </Box>
  )
  
};

export default Couple;
