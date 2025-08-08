import { Box } from "@mui/material";
import "./Modal.css";

type Props = {
  onClick: () => void;
};

const Modal = (props: Props) => {
  const { onClick } = props;

  return (
    <Box className="modal-section">
      <Box width={"80%"} height={{xs: '60%', md: '80%'}} className="modal-container">
        <Box
          component={"iframe"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.09760050846205!2d-58.38667742519916!3d-34.59979281466889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac70d526ae3%3A0x37aa9757a93e89f0!2sRegistro%20Civil%20Central!5e0!3m2!1ses-419!2sar!4v1754613873159!5m2!1ses-419!2sar"
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
