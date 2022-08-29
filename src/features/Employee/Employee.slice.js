import { createSlice, current } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  employee: [],
  status: STATUSES.IDLE,
};

const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    add: (state, action) => {
      state.employee.push({ ...action.payload });
      console.log("state", current(state));
    },
  },
});

export const employeeSelector = (state) => state.employee.employee;

export const { add } = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
