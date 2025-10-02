import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
