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

  // const [results, setResults] = useState();

  function handleChange(inputId, value) {
    setUserInput((prevData) => {
      return { ...prevData, [inputId]: +value }; // adding + operator infront of value insures it is converted from string to integer
    });
  }

  const myResults = calculateInvestmentResults(userInput);

  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleChange={handleChange} />
    <table id="result">
      <thead>
        <tr>
          {/* Render header cells here */}
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Value End of Year</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {myResults.map((result, index) => (
          <tr key={index}>
            {/* Render data cells here */}
            <td>{result.year}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  );
}

export default App;
