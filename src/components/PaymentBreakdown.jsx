import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  selectMonthlyPI,
  selectForm,
  selectTotalMonthly,
} from "../redux/calculatorSlice";

const colors = {
  principal: "bg-emerald-900",
  taxes: "bg-purple-700",
  insurance: "bg-pink-300",
  hoa: "bg-yellow-300",
  utilities: "bg-orange-400",
};

const fmt = (num) => Number(num.toFixed(2)).toLocaleString();

const PaymentBreakdown = () => {
  const dispatch = useDispatch();
  const form = useSelector(selectForm);
  const monthlyPI = useSelector(selectMonthlyPI);
  const grandTot = useSelector(selectTotalMonthly);

  const setExtra = (key) => (e) =>
    dispatch(updateField({ key, value: +e.target.value }));

  const slices = [
    { key: "principal", label: "Principal & interest", value: monthlyPI },
    { key: "taxes", label: "Property taxes", value: form.taxes },
    { key: "insurance", label: "Homeowners insurance", value: form.insurance },
    { key: "hoa", label: "HOA fees", value: form.hoa },
    { key: "utilities", label: "Utilities", value: form.utilities },
  ];

  return (
    <section className="py-12 px-6 md:px-10 sm:py-16">
      <div className="max-w-[1200px] mx-auto grid gap-12 lg:gap-16 md:grid-cols-2">
        {/* ───────── Left column ───────── */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            Monthly payment breakdown
          </h3>
          <p className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">
            ${fmt(grandTot)}/mo
          </p>

          {/* stacked bar */}
          <div className="flex h-14 sm:h-20 rounded-full overflow-hidden">
            {slices.map(({ key, value }) => (
              <div
                key={key}
                className={`${colors[key]} flex-shrink-0`}
                style={{ width: `${(value / grandTot) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* ───────── Right column ───────── */}
        <div className="grid grid-cols-[1fr_auto] gap-y-6 sm:gap-y-8 gap-x-6 sm:gap-x-8 items-center">
          {slices.map(({ key, label, value }) => (
            <React.Fragment key={key}>
              {/* legend */}
              <div className="flex items-center gap-4">
                <span className={`w-1.5 h-6 ${colors[key]} rounded-sm`} />
                <span className="text-lg">{label}</span>
              </div>

              {/* value or editable input */}
              {key === "principal" ? (
                <span className="text-xl sm:text-2xl font-semibold">
                  ${fmt(value)}
                </span>
              ) : (
                <input
                  type="number"
                  className="w-28 sm:w-32 md:w-36 p-2 border rounded-lg text-base sm:text-lg"
                  value={value}
                  onChange={setExtra(key)}
                  min={0}
                />
              )}
            </React.Fragment>
          ))}

          {/* keep grid shape + CTA */}
          <div />
          <button className="cursor-pointer bg-green-50 hover:bg-green-100 py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-medium">
            Copy estimate link
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentBreakdown;
