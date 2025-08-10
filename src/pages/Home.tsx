import { Box, Grid } from "@mui/material";
import Timer from "../components/timer/Timer";
import Phrase from "../components/phrase/Phrase";
import Carousel from "../components/carousel/Carousel";
import { pictures } from "../components/carousel/images";
import Info from "../components/info/Info";
import img from "../assets/sorpasso.svg";
import Hero from "../components/hero/Hero";
import gondole from "../assets/gondole.jpg";
import Form from "../components/form/Form";
import gift from "../assets/gift.gif";
import foto from "../assets/hero.svg";
import foto2 from "../assets/capri.jpg";
import welcomeImgTablet from "../assets/welcome-img-tablet.png";
import welcomeImgDesktop from "../assets/welcome-img-desktop.png";
import { useState } from "react";
import Couple from "../assets/icons/couple/Couple";
import cs from "../audio/champagne Supernova.mp3";
import Player from "../components/player/Player";
import Modal from "../components/modal/Modal";
// import data from '../data/data.json'

const Home = () => {
  const [welcomeScreen, setWelcomeScreen] = useState<boolean>(true);
  const [loader, setLoader] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isMap, setIsMap] = useState<boolean>(true);

  // setTimeout(() => {
  //   setLoader(false);
  // }, 6000);

  return (
    <Box>
      {welcomeScreen && !loader && (
        <Grid container>
          <Grid
            size={12}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Couple onClick={() => setWelcomeScreen(false)}/>
          </Grid>
        </Grid>
        // <Hero
        //   xsImg={welcomeImgTablet}
        //   mdImg={welcomeImgTablet}
        //   lgImg={welcomeImgDesktop}
        //   welcomeScreen
        //   showBtn
        //   onClick={() => {
        //     setWelcomeScreen(false), setLoader(true);
        //   }}
        // />
      )}

      {loader && (
        <Grid container>
          {/* <Grid
            size={12}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Couple />
          </Grid> */}
        </Grid>
      )}
      {!loader && !welcomeScreen && (
        <>
          <Player src={cs} />
          {showModal && (
            <Modal
              isMap={isMap}
              src={location}
              onClick={() => {
                setShowModal(false), setLocation(""), setIsMap(true);
              }}
            />
          )}
          {}
          <Grid container>
            <Grid size={12}>
              <Hero xsImg={foto} mdImg={foto2} lgImg={foto2} />
            </Grid>
            <Grid size={12}>
              <Timer />
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
                icon={gift}
                onClick={() => {
                  setShowModal(true), setLocation("registroCivil");
                }}
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
                btnClassname="btn-outline "
                icon={gift}
                onClick={() => {
                  setShowModal(true), setLocation("ilSorpasso");
                }}
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
                btnClassname="btn-outline"
                icon={gift}
                onClick={() => {
                  setShowModal(true), setIsMap(false);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={pictures} />
            </Grid>
            <Grid size={12}>
              <Form />
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Home;
