import { useState } from "react";

function InputGroup({ label, value }) {
  return (
    <div className="input-group">
      <p>
        <label>{label}</label>
        <label>{value}</label>
        <input type="number" required value={value}/>
      </p>
    </div>
  );
}

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange({ inputId, value }) {
    setUserInput((prevData) => {
      return { ...prevData, [inputId]: value };
    });
  }

  return (
    <section id="user-input">
      <InputGroup
        label="Initial Investment"
        value={userInput.initialInvestment}
        onChange={(event) =>
          handleChange("initialInvestment", event.target.value)
        }
      />
      <InputGroup
        label="Annual Investment"
        value={userInput.annualInvestment}
        onChange={(event) =>
          handleChange("annualInvestment", event.target.value)
        }
      />
      <InputGroup
        label="Expected Return"
        value={userInput.expectedReturn}
        onChange={(event) => handleChange("expectedReturn", event.target.value)}
      />
      <InputGroup
        label="Duration"
        value={userInput.duration}
        onChange={(event) => handleChange("duration", event.target.value)}
      />
    </section>
  );
}
