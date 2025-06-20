import { Box, Grid } from "@mui/material";
import Timer from "../components/timer/Timer";
import Phrase from "../components/phrase/Phrase";
import Carousel from "../components/carousel/Carousel";
import { pictures } from "../components/carousel/images";
import Info from "../components/info/Info";
import img from '../assets/sorpasso.svg'
import fondo from '../assets/fondo.jpg'
import Hero from "../components/hero/Hero";


const Home = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={12}>
          <Hero />
        </Grid>
        <Grid size={12}>
          <Timer />
        </Grid>
        {/* <Grid size={12} bgcolor={'#2A2D34'}> NEGRO */}
        <Grid size={12} bgcolor={'#07928E'}>
          <Carousel arrayImg={pictures}/>
        </Grid>
        <Grid size={12}>
          <Info bgc={`url(${fondo})`} text={'¿Cuándo?'} text2="12 de Septiembre 2025" text3="Registro Civil Central" text4=" Uruguay 753 - 17 hs" className=""/>
        </Grid>
        
        <Grid size={12}>
          <Phrase phrase="Cuando menos lo esperas, una buena persona llega a tu vida para mejorarlo todo." />
        </Grid>
        <Grid size={12}>
          <Info bgc={`url(${img})`} text={'¿Dónde?'} text2="Il Sorpasso - San Telmo" text3="Humberto I° 478" text4="" className="info-container2"/>
        </Grid>
        <Grid size={12} bgcolor={'#FBF0C6'}>
          <Carousel arrayImg={pictures}/>
        </Grid>
        <Grid size={12}>
          <Phrase phrase="Cause all of the stars are fading away, just try not to worry. You'll see them someday" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
