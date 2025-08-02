import { Box, Button, Typography } from "@mui/material";
import './Hero.css'

type Props = {
  xsImg: string;
  mdImg?: string;
  welcomeScreen?: boolean
  showBtn?: boolean;
  onClick?: () => void;
};

const Hero = (props: Props) => {
  const { xsImg, mdImg, welcomeScreen, showBtn, onClick } = props;

  return (
    <Box
      display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} 
      sx={{
        height: { xs: welcomeScreen ? '100vh' : '430px', sm: "600px", md: "100vh" },
        background: { xs: `url(${xsImg})`, md: `url(${mdImg})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "auto", md: "cover" },
        backgroundPosition: { xs: "center", md: "center" },
        filter: { md: "grayscale(1)"},
      }}
    >
      {showBtn && 
        <Box m={'0 auto'} textAlign={'center'} mb={'30px'} height={'90%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          {/* <Typography className="text-hero" variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: '60px !important', pt: '20px'}}>Maru & Pablo</Typography> */}
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography className="text1" variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: '60px !important', pt: '20px', mr: '15px'}}> Maru</Typography>
          <Typography className="text2" variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: '40px !important', pt: '20px', mr: '15px'}}>&</Typography>
          <Typography className="text3" variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: '60px !important', pt: '20px'}}>Pablo</Typography>
          </Box>
          
          <Button className="btn-hero" onClick={onClick}>Ingresar</Button>
        </Box>
      }
    </Box>
  );
};

export default Hero;
