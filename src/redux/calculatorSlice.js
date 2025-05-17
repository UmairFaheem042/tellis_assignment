// src/redux/calculatorSlice.js
import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    homePrice: 0,
    downPayment: 0,
    interestRate: 0,
    taxes: 0,
    zipCode: "",
    monthlyPayment: null,
  },
  reducers: {
    updateField: (state, action) => {
      return { ...state, ...action.payload };
    },
    calculatePayment: (state) => {
      const loanAmount = state.homePrice - state.downPayment;
      const monthlyRate = state.interestRate / 100 / 12;
      const term = 30 * 12; // 30-year mortgage
      const monthlyPrincipalInterest =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
        (Math.pow(1 + monthlyRate, term) - 1);
      const monthlyTaxes = state.taxes / 12;
      state.monthly_prev_monthlyPayment =
        monthlyPrincipalInterest + monthlyTaxes;
    },
  },
});

export const { updateField, calculatePayment } = calculatorSlice.actions;
export default calculatorSlice.reducer;
