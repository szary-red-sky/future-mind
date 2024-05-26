import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";
import { SearchOptionsProvider } from "./context/searchOptionsContext";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchOptionsProvider>
          <App />
        </SearchOptionsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
