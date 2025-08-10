import { Player } from "@lottiefiles/react-lottie-player";
import couple from "./Couple Walk.json";
import { Box, Button } from "@mui/material";
import './Couple.css'

type Props = {
  onClick: () => void
}

const Couple = (props: Props) => {
  const { onClick } = props

  return (
    <Box  className='loader-section'>
      <Player src={couple} autoplay loop/>
      <Button className="btn-loader" onClick={onClick}>Ingresar</Button>
    </Box>
  )
  
};

export default Couple;
