import React from "react";

import { CoffeeList, Container } from "./ProductsList.styles";

import { coffees } from "../../../../mocks/ProductsMock";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  return (
    <section>
      <Container>
        <header>Nossos Cafés</header>
        <CoffeeList>
          {coffees.map((coffee) => (
            <ProductCard key={coffee.id} product={coffee} />
          ))}
        </CoffeeList>
      </Container>
    </section>
  );
};

export default ProductsList;
