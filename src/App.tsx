import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddUser from "./pages/AddUser";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import type { User } from "./types/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<UserList users={users} setUsers={setUsers} />}
          />
          <Route path="/user/:id" element={<UserDetails users={users} />} />
          <Route
            path="/add-user"
            element={<AddUser users={users} setUsers={setUsers} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
