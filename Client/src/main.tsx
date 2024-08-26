import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <div onContextMenu={(e) => e.preventDefault()}>
        <App />
      </div>
    </HelmetProvider>
  </StrictMode>
);
