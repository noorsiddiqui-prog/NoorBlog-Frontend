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

function App() {
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
