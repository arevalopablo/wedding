import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import "./Modal.css";
import data from "../../data/data.json";

type Props = {
  // [key:string]:any,
  onClick: () => void;
  src?: string;
  isMap: boolean;
  icon?: string;
};

const Modal = (props: Props) => {
  const { onClick, src, isMap, icon } = props;

  return (
    <Box className="modal-section">
      <Box
        width={"80%"}
        height={{ xs: "60%", sm: "80%", md: "80%" }}
        className="modal-container"
      >
        {isMap ? (
          <Box
            component={"iframe"}
            // src={`${data.locations[src].address}`}
            src={`${data.locations.registroCivil.address}`} //CAMBIAR PARA QUE SEA DINAMICO
            alignItems={src}//ESTA LINEA NO VA, ES SOLO PARA QUE NO TIRE ERROR !!!!
            sx={{ border: "0", width: "100%", height: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Box>
        ) : (
          <Box className="alias-section" >
            <Box className="alias-container">
              <Typography variant="h1">¿Regalo?</Typography>
              <ImageList
                sx={{ width: "100px", m: "10px auto", display: "flex" }}
              >
                <ImageListItem data-aos="fade">
                  <img src={icon} alt="icon" />
                </ImageListItem>
              </ImageList>
              <Typography variant="h2">
               ¡¡El mejor regalo es tu presencia en el día más importante de nuestras vidas!! Aún así, si deseás contribuir para cumplir nuestro sueño, te dejamos nuestro alias.
              </Typography>
              <Box>
                <Typography variant="h1">Alias</Typography>
                <Typography variant="h2">maru&pablo</Typography>
              </Box>
              <Typography variant="h3">
                ¡Muchas gracias! 
              </Typography>
            </Box>
          </Box>
        )}
        <Box className="modal-close" onClick={onClick}>
          <span style={{ color: "#fff", fontSize: "40px" }}>x</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
