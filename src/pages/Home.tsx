import { Box, Grid } from "@mui/material";
import {
  Hero,
  Carousel,
  Countdown,
  Info,
  Modal,
  Phrase,
  Player,
  Timeline,
} from "../components/components";
import { carousel1, carousel2, carousel3 } from "../components/carousel/images";
import {
  calendar,
  check,
  discoball,
  travel,
  diamond,
} from "../assets/icons/gif";
import {
  capri,
  gondole,
  heroMobile,
  heroTablet,
  sorpasso,
  timelineDesktop,
  timelineMobile,
  timelineTablet,
  welcomeImgDesktop,
  welcomeImgTablet,
} from "../assets/assets";
import Couple from "../assets/icons/Couple";
import cs from "../audio/champagne Supernova.mp3";
import { useState } from "react";

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
              icon={travel}
              onClick={() => {
                setShowModal(false), setIsMap(true), setLocation(true);
              }}
            />
          )}
          <Grid container>
            <Grid size={12}>
              <Hero xsImg={heroMobile} mdImg={heroTablet} lgImg={capri} />
            </Grid>
            <Grid size={12}>
              <Countdown />
            </Grid>
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
                icon={calendar}
                onClick={() => {
                  setShowModal(true);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={carousel1} />
            </Grid>

            <Grid size={12}>
              <Phrase phrase='"Nada es más hermoso que celebrar el amor rodeados de quienes amamos"' />
            </Grid>
            <Grid size={12}>
              <Info
                bgc={`url(${sorpasso})`}
                mainText={"¿Dónde?"}
                subtext="Il Sorpasso"
                description="Humberto I° 478 - San Telmo"
                className="info-container-golden"
                showBtn
                btnText="Ver mapa"
                btnClassname="btn-outline "
                showIcon
                icon={discoball}
                onClick={() => {
                  setShowModal(true), setLocation(false);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={carousel2} />
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
                btnText="Contribuir"
                btnClassname="btn-outline"
                showIcon
                icon={travel}
                onClick={() => {
                  setShowModal(true), setIsMap(false);
                }}
              />
            </Grid>
            <Grid size={12}>
              <Carousel arrayImg={carousel3} />
            </Grid>

            <Grid size={12}>
              <Info
                mainText="¿Dress code?"
                subtext="Elegante sport"
                description="¡Color BLANCO solo para la novia!"
                showBtn
                className="info-container-green"
                bgc=""
                showIcon
                icon={diamond}
              />
            </Grid>
            {/* <Grid size={12}>
              <Form />
            </Grid> */}
            <Grid size={12}>
              <Phrase phrase='"Gracias por ser parte de nuestra alegría y por hacer de esta noche un recuerdo eterno"' />
            </Grid>
            <Grid size={12}>
              <Info
                mainText="¡Confirmá asistencia!"
                subtext="!Te esperamos!"
                description="Confirmar antes del 01.09.2025"
                bgc={"#fff"}
                className="info-container-green"
                btnText="Confirmar"
                btnClassname="btn-date"
                icon={check}
                showIcon
                showBtn={false}
                href="https://wa.me/5491134141777"
              />
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
