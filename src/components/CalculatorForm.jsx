// src/components/CalculatorForm.jsx
import { useDispatch, useSelector } from "react-redux";
import { updateField, calculatePayment } from "../redux/calculatorSlice";

const CalculatorForm = () => {
  const dispatch = useDispatch();
  const {
    homePrice,
    downPayment,
    interestRate,
    taxes,
    zipCode,
    monthlyPayment,
  } = useSelector((state) => state.calculator);

  const handleInputChange = (e) => {
    dispatch(updateField({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(calculatePayment());
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Mortgage Calculator
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-lg mb-2">Home Price ($)</label>
          <input
            type="number"
            name="homePrice"
            value={homePrice}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Down Payment ($)</label>
          <input
            type="number"
            name="downPayment"
            value={downPayment}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Interest Rate (%)</label>
          <input
            type="number"
            step="0.01"
            name="interestRate"
            value={interestRate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Annual Taxes ($)</label>
          <input
            type="number"
            name="taxes"
            value={taxes}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded w-full"
        >
          Calculate
        </button>
      </form>
      {monthlyPayment && (
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold">
            Monthly Payment: ${monthlyPayment.toFixed(2)}
          </h3>
          <p>
            Principal & Interest: ${(monthlyPayment - taxes / 12).toFixed(2)}
          </p>
          <p>Taxes: ${(taxes / 12).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};
export default CalculatorForm;
