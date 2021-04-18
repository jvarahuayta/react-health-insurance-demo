import * as yup from "yup";

export const landingFormSchema = yup.object().shape({
    documentType: yup
        .string()
        .required("Tipo documento requerido")
        .oneOf(["DNI", "RUC", "CE"], "Tipo documento no válido"),
    documentNumber: yup
        .string()
        .required("N° documento requerido")
        .when("documentType", {
            is: (val) => ["DNI", "CE"].includes(val),
            then: yup.string().length(8, "N° documento inválido"),
        })
        .when("documentType", {
            is: "RUC",
            then: yup.string().length(11, "N° documento inválido"),
        }),
    cellphone: yup
        .string()
        .required("Celular requerido")
        .length(9, "Celular inválido"),
});
