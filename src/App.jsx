import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 10,
  });

  function handleChange(inputId, newValue) {
    setUserInput((prevData) => {
      return { ...prevData, [inputId]: +newValue }; // adding + operator infront of value insures it is converted from string to integer
    });
  }

  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleChange={handleChange} />
    <Results userInput={userInput} />
  </>
  );
}

export default App;
