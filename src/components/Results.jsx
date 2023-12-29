import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const myResults = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          {/* Render header cells here */}
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Value End of Year</th>
          <th>Annual Investment</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {myResults.map(result =>
          <tr key={result.year}>
            {/* Render data cells here */}
            <td>{result.year}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
