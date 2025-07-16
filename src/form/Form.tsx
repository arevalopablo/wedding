import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import "./Form.css";
import useForm from "./useForm";

const Form = () => {
  const { formik  } = useForm()
  console.log(Object.entries(formik.initialValues))

  const obj = {
    name: 'text',
    lastName: 'text',
    options: 'select',
    message: 'textarea'
  }
  
  return (
    <Box className="form-section">
      <Box
        sx={{
          height: { xs: "50%", md: "50%", lg: '70%' },
          width: '100%',
          m: "0 auto",
          textAlign: "center",
          // background: "#e8efe7",
          // borderTop: '2px solid #07928E',
          // borderBottom: '2px solid #07928E',
          p: '20px'
        }}
      >
        <Typography variant="h1" sx={{color: '#07928E', mb: '10px'}}>¡Confirmá tu asistencia!</Typography>
        <Typography variant="h2" sx={{color: '#07928E'}}>antes del 01 de Septiembre 2025</Typography>
        
        <Box component={'form'} display={'flex'} flexDirection={'column'} gap={1} width={'400px'} m={'30px auto'}>
          {Object.entries(formik.initialValues).map((arr, index) => (
           <TextField key={index} label={arr[0]}></TextField>
           
          ))}
          <Button type="submit">Confirmar</Button>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Form;
