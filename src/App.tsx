import Initial from "./pages/Initial";
import Todos from "./pages/Todos";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./components/hooks/reduxHook";
import { useEffect } from "react";

function App() {
  const data = useAppSelector((state) => state.data.data);
  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  console.log(data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/:id" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
