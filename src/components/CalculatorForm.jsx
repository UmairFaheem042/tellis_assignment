import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  selectForm,
  selectTotalMonthly,
} from "../redux/calculatorSlice";
import React from "react";

const CalculatorForm = () => {
  const dispatch     = useDispatch();
  const form         = useSelector(selectForm);
  const grandTotal   = useSelector(selectTotalMonthly);

  // handy change handler factory
  const onChange = (key, isNum = true) => (e) =>
    dispatch(updateField({ key, value: isNum ? +e.target.value : e.target.value }));

  return (
    // <section className="bg-green-50 py-20 px-6">
    <section className="bg-green-50 py-12 sm:py-16 lg:py-20 px-6 sm:px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* <h2 className="text-5xl font-medium mb-4">Mortgage calculator</h2> */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">Mortgage calculator</h2>
        <p className="max-w-3xl mb-10 sm:mb-12 text-sm sm:text-base text-gray-500">
          Our mortgage calculator includes key factors like homeowners association
          fees, property taxes, and private mortgage insurance (PMI). Get the whole
          picture and calculate your total monthly payment.
        </p>

        {/* ───────── Top row ───────── */}
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {/* Home price */}
          <div className="space-y-2">
            <label className="block font-semibold text-lg">Home price</label>
            <input
              type="number"
              value={form.price}
              onChange={onChange("price")}
              className="w-full bg-white text-2xl sm:text-3xl font-semibold border rounded-md px-4 py-3"
            />
          </div>

          {/* ALL‑IN monthly payment */}
          <div className="space-y-2">
            <label className="block font-semibold text-lg">Monthly payment</label>
            <p className="text-3xl sm:text-4xl font-semibold">
              ${grandTotal.toLocaleString(undefined,{maximumFractionDigits:2})}/
              <span className="text-xl font-normal">mo</span>
            </p>
          </div>

          {/* CTA */}
          <div className="md:justify-self-end">
            <button className="bg-green-700 hover:bg-green-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg mt-6 sm:mt-8 md:mt-0">
              Get pre‑approved
            </button>
          </div>
        </div>

        {/* slider (price) */}
        {/* <div className="my-10"> */}
        <div className="my-8 sm:my-10">
          <input
            type="range"
            min="50000"
            max="1500000"
            step="5000"
            value={form.price}
            onChange={onChange("price")}
            className="w-full accent-black h-2"
          />
        </div>

        {/* second row */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="block font-semibold mb-2">ZIP code</label>
            <input
              value={form.zip}
              onChange={onChange("zip", false)}
              className="w-full border rounded-md bg-white p-3"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Down payment</label>
            <input
              type="number"
              value={form.down}
              onChange={onChange("down")}
              className="w-full border rounded-md bg-white p-3"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Interest rate</label>
            <input
              type="number"
              step="0.01"
              value={form.rate}
              onChange={onChange("rate")}
              className="w-full border rounded-md bg-white p-3"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Length of loan (years)</label>
            <select
              value={form.years}
              onChange={onChange("years")}
              className="w-full border rounded-md bg-white p-3"
            >
              {[15, 20, 25, 30].map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorForm;
