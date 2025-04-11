import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Interview from "./pages/Interview";
import "./App.css";
import Error404 from "./pages/Error404";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="*" element={<Error404 />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
