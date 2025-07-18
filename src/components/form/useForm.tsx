import { useFormik } from "formik";
import { formValidationSchema } from "../../validations/form.validation";

type FormWedding = {
  nombre: string;
  apellido: string;
  opciones: string;
  mensaje: string;
};

const useForm = () => {
  const formik = useFormik<FormWedding>({
    initialValues: {
      nombre: "",
      apellido: "",
      opciones: "",
      mensaje: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values, options) => {
      console.log(values);
      options.resetForm();
    },
  });

  const formTypes = (key: string) => {
    switch (key) {
      case "opciones":
        return "select";
      case "mensaje":
        return "textarea";
      default:
        return "text";
    }
  };

  return {
    formik,
    formTypes,
  };
};

export default useForm;
