import { configureStore } from "@reduxjs/toolkit";

import EmployeeReducer from "../features/Employee/Employee.slice";

export default configureStore({
  reducer: {
    employee: EmployeeReducer,
  },
  devTools: true,
});
