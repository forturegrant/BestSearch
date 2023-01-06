import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Search from "./search";
import SearchResult from "./searchResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Search />} />
        <Route path="/search/result/:searchContent" element={<SearchResult />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
