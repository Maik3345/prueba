import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Artists from "./components/Artists";
import Header from "./shared/components/Header";

function App() {
  console.log("hola");
  
  return (
    <div className="App">
      <Header />
      <div className="pageContent">
        <Routes>
          <Route path="/" element={<Artists />} />
        </Routes>
      </div>
    </div>
  );
}

export default memo(App);
