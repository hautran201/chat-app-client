import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ChatMessage from "./pages/Chat";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.user.token);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={token ? <Home /> : <Login />}>
            <Route path="/chat" element={token ? <ChatMessage /> : <Login />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
