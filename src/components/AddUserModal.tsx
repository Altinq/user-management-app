import { useState } from "react";
import type { User } from "../types/User";
import { useUserStore } from "../store/useUserStore";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const { users, addUser } = useUserStore();

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

  const [showAddress, setShowAddress] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const [error, setError] = useState("");

  if (!isOpen) return null;

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
      phone,
      website,
      address:
        street || suite || city || zipcode
          ? { street, suite, city, zipcode }
          : undefined,
      company:
        companyName || catchPhrase || bs
          ? { name: companyName, catchPhrase, bs }
          : undefined,
    };

    addUser(newUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form className="space-y-2" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full p-2 border rounded"
          />

          {/* Foldable Address */}
          <button
            type="button"
            onClick={() => setShowAddress(!showAddress)}
            className="w-full text-left font-semibold mt-4 bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
          >
            Address (optional) {showAddress}
          </button>

          {showAddress && (
            <div className="space-y-2 mt-2">
              <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Suite"
                value={suite}
                onChange={(e) => setSuite(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Zipcode"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowCompany(!showCompany)}
            className="w-full text-left font-semibold mt-4 bg-gray-100 p-2 rounded hover:bg-gray-200 transition"
          >
            Company (optional) {showCompany}
          </button>

          {showCompany && (
            <div className="space-y-2 mt-2">
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CatchPhrase"
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Bs"
                value={bs}
                onChange={(e) => setBs(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
