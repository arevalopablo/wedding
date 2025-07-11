import { Box, Grid } from "@mui/material";
import Timer from "../components/timer/Timer";
import Phrase from "../components/phrase/Phrase";
import Carousel from "../components/carousel/Carousel";
import { pictures } from "../components/carousel/images";
import Info from "../components/info/Info";
import img from '../assets/sorpasso.svg'
import fondo from '../assets/fondo.jpg'
import Hero from "../components/hero/Hero";
import gondole from '../assets/gondole.jpg'
// import Events from "../components/timeline/Events";


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
        <Grid size={12}>
          <Info bgc={`url(${fondo})`} text={'¿Cuándo?'} text2="12 Septiembre 2025" text3="Uruguay 753, CABA - 17:00 hs" className="info-container-green"/>
        </Grid >
        <Grid size={12}>
          {/* <Events/> */}
        </Grid>
        <Grid size={12}>
          <Carousel arrayImg={pictures}/>
        </Grid>
        <Grid size={12}>
          <Phrase phrase="Cuando menos lo esperas, una buena persona llega a tu vida para mejorarlo todo." />
        </Grid>
        <Grid size={12}>
          <Info bgc={`url(${img})`} text={'¿Dónde?'} text2="Il Sorpasso" text3="Humberto I° 478 - San Telmo" className="info-container-golden"/>
        </Grid>
        <Grid size={12}>
          <Carousel arrayImg={pictures}/>
        </Grid>
        <Grid size={12}>
          <Phrase phrase="Cause all of the stars are fading away, just try not to worry. You'll see them someday" />
        </Grid>
        <Grid size={12}>
          <Info bgc={`url(${gondole})`} text="¿Regalo?" text2="Soñamos vivir en Italia... Ayudanos a cumplirlo!" text3="Alias: boda.m&p" className="info-container-golden"/>
        </Grid>
        <Grid size={12}>
          <Carousel arrayImg={pictures}/>
        </Grid>
        <a href="https://wa.me/5491134141777">IR A WHATSAPP</a>
      </Grid>
    </Box>
  );
};

export default Home;
