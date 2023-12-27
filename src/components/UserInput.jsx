import { useState } from "react";

function InputField({ label, value, onChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </p>
  );
}

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(inputId, value) {
    setUserInput((prevData) => {
      return { ...prevData, [inputId]: value };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          label={"initialInvestment"}
          value={userInput.initialInvestment}
          onChange={(value) => handleChange(label, value)}
        />
        <InputField
          label={"annualInvestment"}
          value={userInput.annualInvestment}
          onChange={(value) => handleChange(label, value)}
        />
      </div>
      <div className="input-group">
        <InputField
          label={"expectedReturn"}
          value={userInput.expectedReturn}
          onChange={(value) => handleChange(label, value)}
        />
        <InputField
          label={"duration"}
          value={userInput.duration}
          onChange={(value) => handleChange(label, value)}
        />
      </div>
    </section>
  );
}
