import Wrapper from "./components/Wrapper";
import CardList from "./components/cart/CardList";

import React from "react";
import { cardData } from "./data/data";
import Form from "./components/Form";
import { faker } from "@faker-js/faker";
function App() {
  const [data, setData] = React.useState(cardData);
  const [input, setInput] = React.useState({
    title: "",
    body: "",
  });
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        ...input,
        id: faker.datatype.uuid(),
        user: faker.name.firstName(),
        date: new Date().toString().slice(4, 25),
        image: faker.image.avatar(),
      },
    ]);
    setInput({
      title: "",
      body: "",
    });
  };
  return (
    <Wrapper>
      <Form input={input} handleInput={handleInput} submit={submit} />
      <CardList data={data} />
      
    </Wrapper>
  );
}

export default App;
