import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/app/styles/index.scss";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
