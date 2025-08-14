import { Box, Grid } from "@mui/material";
import Phrase from "../components/phrase/Phrase";
import Carousel from "../components/carousel/Carousel";
import { carrousel1, carrousel2, carrousel3 } from "../components/carousel/images";
import Info from "../components/info/Info";
import img from "../assets/sorpasso.svg";
import Hero from "../components/hero/Hero";
import gondole from "../assets/gondole.jpg";
import Form from "../components/form/Form";
import gift from "../assets/gift.gif";
import heroMobile from "../assets/hero-mobile.svg";
import heroTablet from "../assets/hero-tablet.svg";
import capri from "../assets/capri2.png";
import welcomeImgTablet from "../assets/welcome-img-tablet.png";
import welcomeImgDesktop from "../assets/welcome-img-desktop.png";
import { useState } from "react";
import Couple from "../assets/icons/Couple";
import cs from "../audio/champagne Supernova.mp3";
import Player from "../components/player/Player";
import Modal from "../components/modal/Modal";
// import data from '../data/data.json'
import timelineMobile from "../assets/timeline-mobile.png";
import timelineTablet from "../assets/timeline-tablet.png";
import timelineDesktop from "../assets/timeline-desktop.png";
import Timeline from "../components/timeline/Timeline";
import Countdown from "../components/countdown/Countdown";

const Home = () => {
  const [welcomeScreen, setWelcomeScreen] = useState<boolean>(true);
  const [loader, setLoader] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isMap, setIsMap] = useState<boolean>(true);

  setTimeout(() => {
    setLoader(false);
  }, 6000);

  return (
    <Box>
      {welcomeScreen && !loader && (
        <Hero
          xsImg={welcomeImgTablet}
          mdImg={welcomeImgTablet}
          lgImg={welcomeImgDesktop}
          welcomeScreen
          array={["Maru", "&", "Pablo"]}
          showBtn
          onClick={() => {
            setWelcomeScreen(false), setLoader(true);
          }}
        />
      )}

      {loader && (
        <Grid container>
          <Grid
            size={12}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Couple />
          </Grid>
        </Grid>
      )}
      {!loader && !welcomeScreen && (
        <>
          <Player src={cs} />
          {showModal && (
            <Modal
              isMap={isMap}
              location={location}
              icon={gift}
              onClick={() => {
                setShowModal(false), setIsMap(true), setLocation(true);
              }}
            />
          )}
          {}
          <Grid container>
            <Grid size={12}>
              <Hero xsImg={heroMobile} mdImg={heroTablet} lgImg={capri} />
            </Grid>
            <Grid size={12}>
              <Countdown />
            </Grid>
            {/* <Grid size={12} bgcolor={'#2A2D34'}> NEGRO */}
            <Grid size={12}>
              <Info
                bgc={`#fff`}
                className="info-container-green"
                mainText={"¿Cuándo?"}
                subtext="12 Septiembre 2025"
                description="Uruguay 753, CABA - 17:30 hs"
                showBtn
                btnText="Ver mapa"
                btnClassname="btn-date"
                showIcon
                icon={gift}
                onClick={() => {
                  setShowModal(true);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={carrousel1} />
            </Grid>

            <Grid size={12}>
              <Phrase phrase='"Nada es más hermoso que celebrar el amor rodeados de quienes amamos"' />
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
                btnClassname="btn-outline "
                showIcon
                icon={gift}
                onClick={() => {
                  setShowModal(true), setLocation(false);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={carrousel2} />
            </Grid>
            <Grid size={12}>
              <Timeline
                timelineMobile={timelineMobile}
                timelineTablet={timelineTablet}
                timelineDesktop={timelineDesktop}
              />
            </Grid>
            <Grid size={12}>
              <Phrase phrase='"Hoy comenzamos un nuevo capítulo, y ustedes son las páginas más queridas de nuestra historia"' />
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
                btnClassname="btn-outline"
                showIcon
                icon={gift}
                onClick={() => {
                  setShowModal(true), setIsMap(false);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={carrousel3} />
            </Grid>

            <Grid size={12}>
              <Info
                mainText="¿Dress code?"
                subtext="Elegante sport"
                description="El color BLANCO solo es para la novia! Por favor evitar este color. Gracias"
                className="info-container-green"
                bgc=""
                showIcon
                icon={gift}
              />
            </Grid>
            <Grid size={12}>
              <Form />
            </Grid>
            <Grid size={12}>
              <Phrase phrase='"Gracias por ser parte de nuestra alegría y por hacer de esta noche un recuerdo eterno"' />
            </Grid>
            <Grid size={12}>
              <Hero
                xsImg={welcomeImgTablet}
                mdImg={welcomeImgTablet}
                lgImg={welcomeImgDesktop}
                welcomeScreen
                array={["Maru", "&", "Pablo"]}
              />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Home;
