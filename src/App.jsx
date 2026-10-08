import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/login";
import Compo from "./components/compo/Comp";
import "./App.css";
import PropsParent from "./components/Props/PropsParent";

function App() {
  const [count, setCount] = useState(15);

  const Add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const Minus = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <Header />

      <main className="content">
        <Routes>
          <Route path="/" element={<Compo />} />
          <Route path="/props" element={<PropsParent />} />
        </Routes>
      </main>

      {/* <Login />

      <PropsParent />
      <div>
        <button onClick={Add}>Add</button>

        <button onClick={Minus}>Minus</button>

        <b> Counter: {count}</b>
      </div> */}
    </>
  );
}

export default App;