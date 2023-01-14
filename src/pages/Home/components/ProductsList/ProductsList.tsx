import React from "react";

import { CoffeeList, Container } from "./ProductsList.styles";

import traditionalEspressoImg from "../../../../assets/traditional-espresso.svg";

import ProductCard from "../ProductCard/ProductCard";

const coffees = [
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,99",
    tags: ["Tradicional"],
  },
];

const ProductsList = () => {
  return (
    <section>
      <Container>
        <header>Nossos Cafés</header>

        <CoffeeList>
          {coffees.map((coffee) => (
            <ProductCard
              key={coffee.id}
              image={coffee.image}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </CoffeeList>
      </Container>
    </section>
  );
};

export default ProductsList;
