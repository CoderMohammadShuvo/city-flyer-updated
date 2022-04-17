import "./App.css";
import Main from "./Component/Home/Main/Main";
import Navbar from "./Component/Home/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Component/pages/Login";
import Searchpage from "./Component/pages/SearchPage";
import SignUp from "./Component/pages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./Component/ProtectedRoute";
import Namefield from "./Component/pages/NameField";

function App() {

  // const http = require('http');

  // const hostname = '103.124.251.85';
  // const port = 3000;
  
  // const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/plain');
  //   res.end('Hello World');
  // });
  
  // server.listen(port, hostname, () => {
  //   console.log(`Server running at http://${hostname}:${port}/`);
  // });

  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="Search" element={<Searchpage />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Namefield" element={<Namefield />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
