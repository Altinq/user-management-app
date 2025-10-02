import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { User } from "../types/User";
import { getUsers } from "../services/useService";

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await getUsers();
        const foundUser = users.find((u) => u.id === Number(id));
        setUser(foundUser || null);
      } catch (error) {
        console.error("Failed to fetch user details", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUser();
  }, [id]);

  if (loading)
    return <p className="text-center mt-8 text-gray-500">Loading user...</p>;
  if (!user)
    return <p className="text-center mt-8 text-red-500">User not found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{user.name}</h1>
        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
        </div>
      </div>

      {user.address && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Address</h2>
          <ul className="pl-4 list-disc space-y-1 text-gray-700">
            <li>
              <span className="font-semibold">Street:</span>{" "}
              {user.address.street}
            </li>
            <li>
              <span className="font-semibold">Suite:</span> {user.address.suite}
            </li>
            <li>
              <span className="font-semibold">City:</span> {user.address.city}
            </li>
            <li>
              <span className="font-semibold">Zipcode:</span>{" "}
              {user.address.zipcode}
            </li>
          </ul>
        </div>
      )}

      {user.company && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Company</h2>
          <ul className="pl-4 list-disc space-y-1 text-gray-700">
            <li>
              <span className="font-semibold">Name:</span> {user.company.name}
            </li>
            <li>
              <span className="font-semibold">CatchPhrase:</span>{" "}
              {user.company.catchPhrase}
            </li>
            <li>
              <span className="font-semibold">Bs:</span> {user.company.bs}
            </li>
          </ul>
        </div>
      )}

      <Link
        to="/"
        className="inline-block text-blue-600 hover:underline font-medium mt-4"
      >
        &larr; Back to Users
      </Link>
    </div>
  );
};

export default UserDetails;
