import { Box, Grid } from "@mui/material";
import Timer from "../components/timer/Timer";
import Phrase from "../components/phrase/Phrase";
import Carousel from "../components/carousel/Carousel";
import { pictures } from "../components/carousel/images";
import Info from "../components/info/Info";
import img from "../assets/sorpasso.svg";
import fondo from "../assets/fondo.jpg";
import Hero from "../components/hero/Hero";
import gondole from "../assets/gondole.jpg";
import Form from "../components/form/Form";
import regalo from "../assets/regalo.gif";
import foto from "../assets/hero.svg";
import foto2 from "../assets/capri.jpg";
import welcomeImg from "../assets/welcome-img.png";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Box>
      {loading ? (
        <Hero xsImg={welcomeImg} welcomeScreen showBtn onClick={() => setLoading(false)}/>
      ) : (
        <Grid container>
          <Grid size={12}>
            <Hero xsImg={foto} mdImg={foto2} />
          </Grid>
          <Grid size={12}>
            <Timer />
          </Grid>
          {/* <Grid size={12} bgcolor={'#2A2D34'}> NEGRO */}
          <Grid size={12}>
            <Info
              bgc={`url(${fondo})`}
              mainText={"¿Cuándo?"}
              subtext="12 Septiembre 2025"
              description="Uruguay 753, CABA - 17:00 hs"
              className="info-container-green"
              showBtn
              btnText="Ver mapa"
              icon={regalo}
            />
          </Grid>
          <Grid size={12}>
            <Carousel arrayImg={pictures} />
          </Grid>
          <Grid size={12}>
            <Phrase phrase="Cuando menos lo esperas, una buena persona llega a tu vida para mejorarlo todo." />
          </Grid>
          <Grid size={12}>
            <Info
              bgc={`url(${img})`}
              mainText={"¿Dónde?"}
              subtext="Il Sorpasso"
              description="Humberto I° 478 - San Telmo"
              className="info-container-golden"
              showBtn
              btnText="Ver mapa"
              icon={regalo}
            />
          </Grid>
          <Grid size={12}>
            <Carousel arrayImg={pictures} />
          </Grid>
          <Grid size={12}>
            <Phrase phrase="Cause all of the stars are fading away, just try not to worry. You'll see them someday" />
          </Grid>
          <Grid size={12}>
            <Info
              bgc={`url(${gondole})`}
              mainText="¿Regalo?"
              subtext="Soñamos vivir en Italia..."
              description="Ayudanos a cumplirlo!"
              className="info-container-golden"
              showBtn
              btnText="Ver alias"
              icon={regalo}
            />
          </Grid>
          <Grid size={12}>
            <Carousel arrayImg={pictures} />
          </Grid>
          <Grid size={12}>
            <Form />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Home;
