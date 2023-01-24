import React from "react";
import { useFormContext } from "react-hook-form";

import { MapPinLine } from "phosphor-react";

import { Container, InputsContainer } from "./AddressOptions.styles";

import FormInput, { SIZE_TYPES } from "../FormInput/FormInput";
import SectionLabel from "../SectionLabel/SectionLabel";

const AddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Container>
      <div>
        <SectionLabel
          icon={<MapPinLine size={22} color="#DBAC2C" />}
          title="Endereço de entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />
      </div>
      <InputsContainer>
        <FormInput
          sizeType={SIZE_TYPES.SMALL}
          type="text"
          placeholder="CEP"
          limit={8}
          hasError={!!errors.zipCode}
          errorMessage={errors.zipCode?.message as string}
          registerControl={register("zipCode")}
        />

        <FormInput
          sizeType={SIZE_TYPES.AUTO}
          type="text"
          placeholder="Rua"
          hasError={!!errors.street}
          errorMessage={errors.street?.message as string}
          registerControl={register("street")}
        />

        <div className="formDiv">
          <FormInput
            sizeType={SIZE_TYPES.SMALL}
            type="number"
            placeholder="Número"
            hasError={!!errors.number}
            errorMessage={errors.number?.message as string}
            registerControl={register("number")}
          />

          <FormInput
            sizeType={SIZE_TYPES.AUTO}
            type="text"
            placeholder="Complemento"
            hasError={!!errors.complement}
            errorMessage={errors.complement?.message as string}
            registerControl={register("complement")}
          />
        </div>

        <div className="formDiv">
          <FormInput
            sizeType={SIZE_TYPES.SMALL}
            type="text"
            placeholder="Bairro"
            hasError={!!errors.district}
            errorMessage={errors.district?.message as string}
            registerControl={register("district")}
          />

          <FormInput
            sizeType={SIZE_TYPES.AUTO}
            type="text"
            placeholder="Cidade"
            hasError={!!errors.city}
            errorMessage={errors.city?.message as string}
            registerControl={register("city")}
          />

          <FormInput
            sizeType={SIZE_TYPES.VERYSMALL}
            type="text"
            placeholder="UF"
            limit={2}
            hasError={!!errors.state}
            errorMessage={errors.state?.message as string}
            registerControl={register("state")}
          />
        </div>
      </InputsContainer>
    </Container>
  );
};

export default AddressForm;
