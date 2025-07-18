import * as Yup from "yup";

export const formValidationSchema = Yup.object({
  nombre: Yup.string().required('Campo obligatorio').min(3, 'Tu nombre debe tener al menos 3 caracteres'),
  apellido: Yup.string().required('Campo obligatorio').min(3, 'Tu apellido debe tener al menos 3 caracteres'),
  opciones: Yup.string().required('Debes elegir una de las opciones de alimentación'),
  mensaje: Yup.string()
})