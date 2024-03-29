import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../../../../components/Input";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { notifySuccess } from "../../../../../animation/ToastSucess";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CustomersContext } from "../../../../../contexts/CustomersContext";
import { customersValidationSchema } from "../../../../../validations/customersValidation";
import { api } from "../../../../../services/api";
import { v4 as randomId } from "uuid";
import * as S from "./styles";

export const NewCustomerModal = ({ closeModal }) => {
  const { customers, setCustomers } = useContext(CustomersContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customersValidationSchema),
  });

  const [addressData, setAddressData] = useState({
    state: "",
    city: "",
    neighborhood: "",
    address: "",
  });

  const searchZipCode = async (code) => {
    try {
      const response = await api.get(`/${code}/json/`);
      const { uf: estado, localidade, bairro, logradouro } = response.data;

      setAddressData({
        state: estado,
        city: localidade,
        neighborhood: bairro,
        address: logradouro,
      });
    } catch (err) {}
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    if (value.length === 8) {
      searchZipCode(value);
    }
  };

  const onSubmit = (data) => {
    const newCustomer = {
      id: randomId(),
      name: data.name,
      cnpj: data.cnpj,
      phone: data.phone,
      zipCode: data.zipCode,
      state: addressData.state,
      city: addressData.city,
      neighborhood: addressData.neighborhood,
      address: addressData.address,
      number: data.number,
    };

    const currentCustomers = [...customers, newCustomer];

    setCustomers(currentCustomers);

    localStorage.setItem("@customers", JSON.stringify(currentCustomers));

    notifySuccess("Cliente cadastrado com sucesso");

    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  return (
    <ModalAnimation>
      <ToastContainer />
      <S.ModalContent>
        <ModalHeader title="Cadastrar cliente" closeModal={closeModal} />

        <ModalSeparator />

        <S.inputArea>
          <Input
            title="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            title="CNPJ"
            register={register}
            name="cnpj"
            error={errors.cnpj?.message}
          />
          <Input
            title="Telefone"
            register={register}
            name="phone"
            error={errors.phone?.message}
          />
          <Input
            title="CEP"
            register={register}
            name="zipCode"
            error={errors.zipCode?.message}
            onChange={handleZipCodeChange}
          />
          <Input
            title="Estado"
            register={register}
            name="state"
            error={errors.state?.message}
            defaultValue={addressData.state}
          />
          <Input
            title="Cidade"
            register={register}
            name="city"
            error={errors.city?.message}
            defaultValue={addressData.city}
          />
          <Input
            title="Bairro"
            register={register}
            name="neighborhood"
            error={errors.neighborhood?.message}
            defaultValue={addressData.neighborhood}
          />
          <Input
            title="Endereço"
            register={register}
            name="address"
            error={errors.address?.message}
            defaultValue={addressData.address}
          />
          <Input
            title="Número"
            register={register}
            name="number"
            error={errors.number?.message}
          />
        </S.inputArea>

        <ModalSeparator />

        <S.ButtonContainer>
          <ModalButton submit={handleSubmit(onSubmit)} />
        </S.ButtonContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
