import React, { useContext } from "react";

import { CoffeeList, Container } from "./ProductsList.styles";

import traditionalEspressoImg from "../../../../assets/traditional-espresso.svg";

import { CheckoutContext } from "../../../../contexts/CheckoutContext";
import { Product } from "../../../../domains/Product";
import ProductCard from "../ProductCard/ProductCard";

const coffees: Product[] = [
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.99,
    tags: ["Tradicional"],
  },
  {
    id: "350b6c5e-335f-4e85-9a72-245b85c119123",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.99,
    tags: ["Tradicional"],
  },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
  // {
  //   id: "350b6c5e-335f-4e85-9a72-245b85c119ca",
  //   image: traditionalEspressoImg,
  //   title: "Expresso Tradicional",
  //   description: "O tradicional café feito com água quente e grãos moídos",
  //   price: 9.99,
  //   tags: ["Tradicional"],
  // },
];

const ProductsList = () => {
  const { cart } = useContext(CheckoutContext);

  console.log("cart", cart);

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
