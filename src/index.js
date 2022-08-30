import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <Routes> */}
        {/* <Route path="/FolioStephan_14_10072021/*" element={<App />} /> */}
        <App />
        {/* </Routes> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
