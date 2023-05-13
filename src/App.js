import "./App.css";
import {data} from "./component/data"
import React, { useState } from "react";
import "../src/component/Card";
import { Route, Routes } from "react-router-dom";
import CardList from "./component/CardList";
import Details from "./component/Details";

const App = () => {
  const [list, setList] = useState(data);
  return (
    <Routes>
      <Route path="/" element={<CardList list={list} />} />
      <Route path="/details/:idmov" element={<Details list={list} />} />
    </Routes>
  );
};

export default App;
