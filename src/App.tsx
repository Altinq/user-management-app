import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
