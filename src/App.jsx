import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/login";
import Compo from "./components/compo/Comp"
import Hooksexample from "./components/Hooks/Hooksexample";
import "./App.css";
import PropsParent from "./components/Props/PropsParent";
import ApiExample from "./components/Hooks/ApiExample";
import ReduxExample from "./components/redux/ReduxExample";

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
          <Route path="/hooks" element={<Hooksexample />} />
          <Route path="/api" element={<ApiExample />} />
          <Route path="/redux" element={<ReduxExample />} />
        </Routes>
      </main>
    </>

  );
}

export default App;