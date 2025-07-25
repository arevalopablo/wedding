import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import "./Form.css";
import useForm from "./useForm";

const Form = () => {
  const { formik, formTypes } = useForm();

  return (
    <Box className="form-section">
      <Box
        sx={{
          width: "100%",
          m: "0 auto",
          p: {xs:"60px 0 0 0", sm: '60px 30px 0 30px', md: '130px 0 0 0', lg: '0'},
        }}
      >
        <Typography variant="h1" sx={{ color: "#07928E", mb: "10px", textAlign: 'center' }}>
          ¡Confirmá tu asistencia!
        </Typography>
        <Typography variant="h2" sx={{ color: "#07928E" , textAlign: 'center'}}>
          antes del 01 de Septiembre 2025
        </Typography>

        <Box
          component={"form"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          width={{ xs: "90%", sm: "60%", md: "40%", lg: "30%" }}
          m={"30px auto"}
          onSubmit={formik.handleSubmit}
          
        >
          {Object.keys(formik.values).map((key, index) => (
            <TextField
              sx={{textTransform: 'capitalize', border: 'none'}}
              // color="success"
              key={index}
              label={key === 'opciones' ? `Opciones de alimentación` : key}
              name={key}
              value={formik.values[key]}
              placeholder={key === 'mensaje' ? 'Escribí lo que creas que necesitamos saber...' : `Escribí tu ${key}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              select={formTypes(key) === 'select'}
              multiline={formTypes(key) === 'textarea'}
              rows={4}
              required={key !== 'mensaje'}
              // helperText={formik.errors[key]}
              // error={!!formik.errors[key]}
            >
              {formTypes(key) === 'select' && ['Ninguno', 'Vegetariano', 'Vegano', 'Celíaco', 'Otro'].map((option, index) => (
                <MenuItem key={index} value={option}>{option}</MenuItem>
              ))}
            </TextField>
          ))}
          <Button type="submit" color="success" sx={{background: '#e8efe7'}}>Confirmar</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
