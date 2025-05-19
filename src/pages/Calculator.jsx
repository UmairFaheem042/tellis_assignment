import { useEffect } from "react";
import CalculatorForm from "../components/CalculatorForm";
import PaymentBreakdown from "../components/PaymentBreakdown";

const Calculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <CalculatorForm />
      <PaymentBreakdown />
    </div>
  );
};

export default Calculator;
