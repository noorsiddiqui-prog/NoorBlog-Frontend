import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import CategoriesPage from "./pages/CategoriesPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./components/Layout/Layout";
import AddPost from "./pages/AddPost";
import Signup from "./components/Signup";
import LoginPage from "./pages/LoginPage";
import EditPost from "./pages/EditPost";
import { useState, useEffect } from "react";

function App() {
    const [user, setUser] = useState(null) 
  const [login, setLogin] = useState(false) 

  useEffect(() => {
    const getUser = () => {
       fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
       }).then((response) => {
         if (response.status === 200) { return response.json(); }
         throw new Error("aunthentication has been failed!")
       }).then((resObject) => {
         setUser(resObject.user) 
         console.log("user", user);
       }).catch(err => {
        console.log(err);
      })
    }

    getUser();
  }, [login]) 

  console.log("user", user)
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Layout>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/category" element={<CategoriesPage />} />
            {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          {/* <Footer /> */}
        </Layout>
      </Router>
    </div>
  );
}

export default App;
