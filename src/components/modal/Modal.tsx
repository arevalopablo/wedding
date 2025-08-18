import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import "./Modal.css";
import data from "../../data/data.json";

type Props = {
  onClick: () => void;
  location: boolean;
  isMap: boolean;
  icon?: string;
};

const Modal = (props: Props) => {
  const { onClick, isMap, icon, location } = props;

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
            src={
              location
                ? `${data.locations.registroCivil.address}`
                : `${data.locations.ilSorpasso.address}`
            }
            sx={{ border: "0", width: "100%", height: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Box>
        ) : (
          <Box className="alias-section">
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
                ¡¡El mejor regalo es tu presencia en nuestro día más
                importante!! Aún así, si deseás ayudarnos, te dejamos nuestro
                alias.
              </Typography>
              <Box>
                <Typography variant="h1">Alias</Typography>
                <Typography variant="h2">maru.pablo.boda</Typography>
              </Box>
              <Typography variant="h3">¡Muchas gracias!</Typography>
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
