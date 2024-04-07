import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import { RootStore } from "./stores/RootStore";
import { RootStoreProvider } from "./providers/RootStoreProvider";
import { createRoot } from "react-dom/client";
import Index from "./pages/Index/index";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

const rootStore = new RootStore();

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider rootStore={rootStore}>
      <RootStoreProvider rootStore={rootStore}>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="movie/:id" element={<MovieDetail />} />
          </Routes>
        </Router>
      </RootStoreProvider>
    </Provider>
  </React.StrictMode>
);
