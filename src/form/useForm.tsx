import { useFormik } from "formik";

type FormWedding = {
  nombre: string;
  apellido: string;
  opciones: string[];
  mensaje: string;
};

const useForm = () => {
  const formik = useFormik<FormWedding>({
    initialValues: {
      nombre: "",
      apellido: "",
      opciones: ["ninguno", "vegano", "vegetariano", "celíaco", "otro"],
      mensaje: "",
    },
    onSubmit: (values, options) => {
      console.log(values);
      options.resetForm();
    },
  });

  return {
    formik,
  };
};

export default useForm;
