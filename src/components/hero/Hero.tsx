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
        backgroundRepeat: {xs: 'no-repeat'},
        backgroundSize: { xs: "auto", md: "cover" },
        backgroundPosition: { xs: "center", md: "center" },
        filter: { md: "grayscale(1)"},
      }}
    >
      {showBtn && 
        <Box className='welcome-screen-section'>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            {['Maru', '&', 'Pablo'].map((name, index) => (
              <Typography className={`showText${index + 1}`} key={index} variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: name === '&' ? '40px !important' : '60px !important', pt: '20px', mr: '12px', opacity: '0'}}>{name}</Typography>
            ))}
          </Box>
          <Button className="btn-hero" onClick={onClick}>Ingresar</Button>
        </Box>
      }
    </Box>
  );
};

export default Hero;
