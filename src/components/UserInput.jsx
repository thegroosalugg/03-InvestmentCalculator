function InputGroup({ label }) {
  return (
    <div className="input-group">
      <p>
        <label>{label}</label>
        <input type="number" required />
      </p>
    </div>
  );
}

export default function UserInput() {
  return (
    <section id="user-input">
      <InputGroup label="Initial Investment" />
      <InputGroup label="Annual Investment" />
      <InputGroup label="Expected Return" />
      <InputGroup label="Duration" />
    </section>
  );
}
