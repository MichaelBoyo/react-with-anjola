import React from "react";
import { faker } from "@faker-js/faker";
import "./Todo.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: "green";
  color: ${(props) => props.primary | "white"};
`;
const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");
  const submit = (e) => {
    e.preventDefault();
    setTodos([...todos, { input, date: new Date().toString().slice(4, 25) }]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="max- rounded overflow-hidden shadow-lg">
        <div className="px-1 py-1">
          <div className="font-bold text-xl mb-2">Todo App</div>
          <table className="table-fixed">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Todos</td>
                <td className="border px-4 py-2">Date posted</td>
              </tr>

              {todos.map((todo, index) => (
                <tr key={faker.datatype.uuid()}>
                  <td className="border px-4 py-2">{todo.input}</td>
                  <td className="border px-4 py-2">{todo.date}</td>
                  <td className="border px-4 py-2">
                    <a
                      className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-blue-800"
                      onClick={() => deleteTodo(index)}
                    >
                      delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add Todo"
              aria-label="Full name"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button
              onClick={submit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={submit}
            ></button>
            <Button>click</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Todo;
