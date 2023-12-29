function InputField({ label, value, onChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        value={value}
        onChange={(event) => onChange(event.target.value)} // this data is always collected as a string
      />
    </p>
  );
}

export default function UserInput({userInput, handleChange}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          label={"initialInvestment"}
          value={userInput.initialInvestment}
          onChange={(value) => handleChange("initialInvestment", value)}
        />
        <InputField
          label={"annualInvestment"}
          value={userInput.annualInvestment}
          onChange={(value) => handleChange("annualInvestment", value)}
        />
      </div>
      <div className="input-group">
        <InputField
          label={"expectedReturn"}
          value={userInput.expectedReturn}
          onChange={(value) => handleChange("expectedReturn", value)}
        />
        <InputField
          label={"duration"}
          value={userInput.duration}
          onChange={(value) => handleChange("duration", value)}
        />
      </div>
    </section>
  );
}
