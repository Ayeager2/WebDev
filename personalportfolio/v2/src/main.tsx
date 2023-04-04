import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore: Could not find a declaration file for module './App'.
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
