import { Box, Typography } from "@mui/material";
import "./Form.css";

const Form = () => {
  return (
    <Box className="form-section">
      <Box
        component={"form"}
        sx={{
          height: { xs: "50%", md: "50%", lg: "70%" },
          width: { xs: "100%", md: "30%", lg: "40%" },
          m: "0 auto",
          textAlign: "center",
          background: "#e8efe7",
          borderTop: "2px solid #07928E",
          borderBottom: "2px solid #07928E",
          p: "20px",
        }}
      >
        <Typography variant="h1" sx={{ color: "#07928E" }}>
          ¡Confirmá tu asistencia!
        </Typography>
        <Typography variant="h2" sx={{ color: "#07928E" }}>
          antes del 01 de Septiembre 2025
        </Typography>
        <Typography>TE AMO DULCE PRINCES</Typography>
      </Box>
    </Box>
  );
};

export default Form;
