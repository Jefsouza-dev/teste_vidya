import * as Yup from "yup";

export const customersValidationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  cnpj: Yup.string()
    .required("CNPJ é obrigatório")
    .length(14, "O CNPJ deve ter exatamente 14 dígitos"),
  phone: Yup.string()
    .required("Telefone é obrigatório")
    .min(8, "O telefone deve ter no mínimo 8 dígitos")
    .max(11, "O telefone deve ter no máximo 11 dígitos"),
  zipCode: Yup.string()
    .required("CEP é obrigatório")
    .length(8, "O CEP deve ter exatamente 8 dígitos"),
  state: Yup.string(),
  city: Yup.string(),
  neighborhood: Yup.string(),
  address: Yup.string(),
  number: Yup.string().required("Número é obrigatório"),
});
