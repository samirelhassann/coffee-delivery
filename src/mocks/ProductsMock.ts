import americanCoffe from "../assets/american-coffee.svg";
import capuccinoCoffe from "../assets/capuccino-coffe.svg";
import coffeeWithMilk from "../assets/coffee-with-milk.svg";
import coldEspresso from "../assets/cold-espresso.svg";
import creamyCoffee from "../assets/creamy-coffee.svg";
import latteCoffee from "../assets/latte-coffee.svg";
import machiatto from "../assets/machiatto.svg";
import traditionalEspressoImg from "../assets/traditional-espresso.svg";

import { Product } from "../domains/Product";

export const coffees: Product[] = [
  {
    id: "1",
    image: traditionalEspressoImg,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 6.99,
    tags: ["Tradicional"],
  },
  {
    id: "2",
    image: americanCoffe,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 7.5,
    tags: ["Tradicional"],
  },
  {
    id: "3",
    image: coldEspresso,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 6.99,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: "4",
    image: coffeeWithMilk,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 8.99,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "5",
    image: latteCoffee,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.99,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "6",
    image: capuccinoCoffe,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.99,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "7",
    image: machiatto,
    title: "Machiatto",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.99,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: "8",
    image: traditionalEspressoImg,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 6.99,
    tags: ["Tradicional"],
  },
];
