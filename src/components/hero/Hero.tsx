import { Box, Button, Typography } from "@mui/material";
import './Hero.css'

type Props = {
  xsImg: string;
  mdImg?: string;
  lgImg?: string;
  welcomeScreen?: boolean
  showBtn?: boolean;
  onClick?: () => void;
};

const Hero = (props: Props) => {
  const { xsImg, mdImg, lgImg, welcomeScreen, showBtn, onClick } = props;

  return (
    <Box
      display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} 
      sx={{
        height: { xs: welcomeScreen ? '100vh' : '430px', sm: welcomeScreen ? '100vh' : '600px', md: "100vh" },
        background: { xs: `url(${xsImg})`, sm: `url(${mdImg})`, md: `url(${lgImg})`, lg: `url(${lgImg})` },
        backgroundRepeat: {xs: 'no-repeat', sm: 'no-repeat', lg: 'no-repeat'},
        backgroundSize: { xs: "cover", sm: 'cover', md: "cover", lg: 'cover' },
        backgroundPosition: { xs: "center", sm: welcomeScreen ? 'top' : 'center', md: "center", lg: welcomeScreen ? '0 -150px' : '0 -220px' },
        filter: { md: "grayscale(1)"}, //SE QUEDA DEPENDIENDO DE LA IMAGEN QUE SE ELIJA

      }}
    >
      {showBtn && 
        <Box className='welcome-screen-section'>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            {['Maru', '&', 'Pablo'].map((name, index) => (
              <Typography className={`showText${index + 1}`} key={index} variant="h1" sx={{fontFamily: 'Great Vibes', fontSize: name === '&' ? {xs: '40px !important', sm: '50px !important', md: '60px !important'} : {xs: '60px !important', sm: '70px !important', md:'70px !important', lg: '80px !important'}, pt: '20px', mr: '12px', opacity: '0'}}>{name}</Typography>
            ))}
          </Box>
          <Button className="btn-hero" onClick={onClick}>Ingresar</Button>
        </Box>
      }
    </Box>
  );
};

export default Hero;
