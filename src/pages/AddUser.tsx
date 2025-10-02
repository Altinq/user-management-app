import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/User";

interface AddUserProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddUser: React.FC<AddUserProps> = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  const [error, setError] = useState("");

  const [showAddress, setShowAddress] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setError("Name and Email are required.");
      return;
    }

    const maxId = users.length > 0 ? Math.max(...users.map((u) => u.id)) : 0;

    const newUser: User = {
      id: maxId + 1,
      name,
      email,
      phone: phone || "",
      website: website || "",
      address:
        street || suite || city || zipcode
          ? { street, suite, city, zipcode }
          : undefined,
      company:
        companyName || catchPhrase || bs
          ? { name: companyName, catchPhrase, bs }
          : undefined,
    };

    setUsers([newUser, ...users]);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Website</label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={() => setShowAddress(!showAddress)}
          className="w-full text-left font-semibold mt-4 bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
        >
          Address (optional) {showAddress ? "▲" : "▼"}
        </button>

        {showAddress && (
          <div className="space-y-2 mt-2">
            <div>
              <label className="block mb-1">Street</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Suite</label>
              <input
                type="text"
                value={suite}
                onChange={(e) => setSuite(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Zipcode</label>
              <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowCompany(!showCompany)}
          className="w-full text-left font-semibold mt-4 bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
        >
          Company (optional) {showCompany ? "▲" : "▼"}
        </button>

        {showCompany && (
          <div className="space-y-2 mt-2">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">CatchPhrase</label>
              <input
                type="text"
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1">Bs</label>
              <input
                type="text"
                value={bs}
                onChange={(e) => setBs(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
