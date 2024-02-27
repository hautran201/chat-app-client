import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ChatMessage from "./pages/Chat";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/chat" element={<ChatMessage />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
