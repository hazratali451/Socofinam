import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import CreateArticle from "./components/pages/CreateArticle";
import Users from "./components/pages/Users";
import AddUser from "./components/pages/AddUser";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/create-article" element={<CreateArticle/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/add-user" element={<AddUser/>} />
      </Routes>
    </>
  );
}

export default App;
