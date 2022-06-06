import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BlockPage from "./com/BlockPage";
import NotFoundPage from "./com/NotFoundPage";
import { Layout } from "./pages/Layout";
import { CategoryPage } from "./com/CategoryPage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlockPage />} />
          <Route path="/:id" element={<CategoryPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>

  );
}


export default App