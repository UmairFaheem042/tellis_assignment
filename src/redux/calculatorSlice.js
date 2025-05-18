import { createSlice, createSelector } from "@reduxjs/toolkit";

// ---- helpers ---------------------------------------------------------------
const calcPI = (price, down, rateAnnual, years) => {
  const loanAmount = Math.max(price - down, 0);
  const r = rateAnnual / 100 / 12;        // monthly rate
  const n = years * 12;                   // total # payments
  if (r === 0) return loanAmount / n;
  return (loanAmount * r * Math.pow(1 + r, n)) /
         (Math.pow(1 + r, n) - 1);
};

// ---- slice -----------------------------------------------------------------
const initialState = {
  // main form values
  price: 300000,
  down:  60000,
  rate:  6.5,
  years: 30,
  zip:   "302002",

  // editable extras in PaymentBreakdown
  taxes:     271,
  insurance: 132,
  hoa:       132,
  utilities: 100,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateField: (state, { payload: { key, value } }) => {
      state[key] = value;
    },
  },
});

export const { updateField } = calculatorSlice.actions;
export default calculatorSlice.reducer;

// ---- selectors -------------------------------------------------------------
export const selectForm = (st) => st.calculator;

export const selectMonthlyPI = createSelector(
  selectForm,
  ({ price, down, rate, years }) => calcPI(price, down, rate, years)
);

export const selectTotalMonthly = createSelector(
  selectForm,
  selectMonthlyPI,
  ({ taxes, insurance, hoa, utilities }, pi) =>
    pi + taxes + insurance + hoa + utilities
);
