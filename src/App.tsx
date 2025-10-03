import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import UserList from "./pages/Users";
import UserDetails from "./pages/User";
import AddUserModal from "./components/AddUserModal";

function App() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const openAddUserModal = () => setIsAddUserOpen(true);
  const closeAddUserModal = () => setIsAddUserOpen(false);

  return (
    <BrowserRouter>
      <Navbar onAddUserClick={openAddUserModal} />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>

        <AddUserModal isOpen={isAddUserOpen} onClose={closeAddUserModal} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
