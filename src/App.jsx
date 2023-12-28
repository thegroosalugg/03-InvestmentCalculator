import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const [results, setResults] = useState();

  function handleChange(inputId, value) {
    setUserInput((prevData) => {
      return { ...prevData, [inputId]: value };
    });
  }

  const myResults = calculateInvestmentResults(userInput);

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Table />
    </>
  );
}

export default App;
