import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RoutesApp } from "./routes/RoutesApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp></RoutesApp>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
