import "antd/dist/antd.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Join from "./pages/Join/join";
import Chat from "./pages/Chat/Chat";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Join />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
