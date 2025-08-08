import { Box } from "@mui/material";
import "./Modal.css";
import data from "../../data/data.json";

type Props = {
  // [key:string]:any,
  onClick: () => void;
  src: string;
};

const Modal = (props: Props) => {
  const { onClick, src} = props;

  return (
    <Box className="modal-section">
      <Box
        width={"80%"}
        height={{ xs: "60%", sm: "80%", md: "80%" }}
        className="modal-container"
      >
        <Box
          component={"iframe"}
          // src={`${data.locations[src].address}`}
          src={`${data.locations.registroCivil.address}`}
          sx={{ border: "0", width: "100%", height: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Box>

        <Box className="modal-close" onClick={onClick}>
          <span style={{ color: "#fff", fontSize: "40px" }}>x</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
