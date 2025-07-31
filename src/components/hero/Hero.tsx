import { Box, Button, Typography } from "@mui/material";
import './Hero.css'

type Props = {
  xsImg: string;
  mdImg?: string;
  prevImg?: boolean
  showBtn?: boolean;
  onClick?: () => void;
};

const Hero = (props: Props) => {
  const { xsImg, mdImg, prevImg, showBtn, onClick } = props;

  return (
    <Box
      display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} 
      sx={{
        height: { xs: prevImg ? '100vh' : '430px', sm: "600px", md: "100vh" },
        background: { xs: `url(${xsImg})`, md: `url(${mdImg})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "auto", md: "cover" },
        backgroundPosition: { xs: "center", md: "center" },
        filter: { md: "grayscale(1)"},
      }}
    >
      {showBtn && 
        <Box m={'0 auto'} textAlign={'center'} mb={'20px'}>
          <Typography variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: '60px !important', color: '#c1944a !important'}}>Maru & Pablo</Typography>
          <Button className="btn-hero" onClick={onClick}>Ingresar</Button>
        </Box>
      }
    </Box>
  );
};

export default Hero;
