import { Box, Button } from "@mui/material";

type Props = {
  xsImg: string;
  mdImg: string;
  prevImg?: boolean
  showBtn?: boolean;
  onClick?: () => void;
};

const Hero = (props: Props) => {
  const {xsImg, mdImg, prevImg, showBtn, onClick } = props;

  return (
    <Box
      display={'flex'} flexDirection={'column'} justifyContent={'flex-end'} pb={'10px'}
      sx={{
        height: { xs: prevImg ? '100vh' : '430px', sm: "600px", md: "100vh" },
        background: { xs: `url(${xsImg})`, md: `url(${mdImg})` },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", md: "cover" },
        backgroundPosition: { xs: "center", md: "center" },
        filter: { md: "grayscale(1)" },
        
      }}
    >
      {showBtn && <Button onClick={onClick}>Ingresar</Button>}
    </Box>
  );
};

export default Hero;
