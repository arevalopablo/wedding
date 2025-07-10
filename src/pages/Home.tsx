import { Box, Grid } from "@mui/material";
import Timer from "../components/timer/Timer";
import Phrase from "../components/phrase/Phrase";
import Carousel from "../components/carousel/Carousel";
import { pictures } from "../components/carousel/images";
import Info from "../components/info/Info";
import img from '../assets/sorpasso.svg'
import fondo from '../assets/fondo.jpg'
import Hero from "../components/hero/Hero";
// import gondole from '../assets/gondole.jpg'
// import Events from "../components/timeline/Events";
import rialto from '../assets/videos/rialto.mp4'

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
          {/* <Info bgc={`url(${gondole})`} /> */}
        </Grid>
        <Grid size={12} mb={'500px'}>
          <Box width={'inherit'} height={'500px'} sx={{background: '#000', position: 'relative'}} >
            <div style={{ height: '100%', width: '100%', }}>
              <video  src={rialto} width={'100%'} height={'100%'} autoPlay muted loop style={{objectFit: 'inherit'}}>
            </video>
            </div>
              <div style={{position: 'absolute', top: 'calc(50% - 80px)', left: 'calc(50% - 75px)', color: 'red', background: 'yellow transparent', height: '200px'}}>
                <h1 >PRUEBA</h1>
              </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
