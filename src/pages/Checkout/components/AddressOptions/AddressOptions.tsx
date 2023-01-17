import React from "react";

import { MapPinLine } from "phosphor-react";

import {
  Container,
  Input,
  InputsContainer,
  sizeValues,
} from "./AddressOptions.styles";

import SectionLabel from "../SectionLabel/SectionLabel";

const AddressOptions = () => {
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
        <Input sizeType={sizeValues.SMALL} type="text" placeholder="CEP" />
        <Input sizeType={sizeValues.AUTO} type="text" placeholder="Rua" />
        <div>
          <Input sizeType={sizeValues.SMALL} type="text" placeholder="Número" />
          <Input
            sizeType={sizeValues.AUTO}
            type="text"
            placeholder="Complemento"
          />
        </div>

        <div>
          <Input sizeType={sizeValues.SMALL} type="text" placeholder="Bairro" />
          <Input sizeType={sizeValues.AUTO} type="text" placeholder="Cidade" />
          <Input sizeType={sizeValues.VERYSMALL} type="text" placeholder="UF" />
        </div>
      </InputsContainer>
    </Container>
  );
};

export default AddressOptions;
