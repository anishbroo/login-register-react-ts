import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppQuery from "./AppQuery.tsx";
import AppMutation from "./AppMutation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <AppQuery /> */}
    <AppMutation />
  </StrictMode>
);
