import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { User } from "../types/User";

interface UserDetailsProps {
  users: User[];
}

const UserDetails: React.FC<UserDetailsProps> = ({ users }) => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      const found = users.find((u) => u.id === Number(id));
      setUser(found || null);
    }
  }, [id, users]);

  if (!user) return <p className="text-center mt-4">User not found.</p>;

  return (
    <div className="max-w-xl mx-auto p-6 border rounded shadow bg-white mt-6">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>

      <div className="space-y-2 mb-4">
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone || "N/A"}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          {user.website ? (
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          ) : (
            "N/A"
          )}
        </p>
      </div>

      {user.address && (
        <div className="mb-4">
          <h2 className="font-semibold mb-2">Address</h2>
          <ul className="pl-4 list-disc space-y-1">
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
        <div>
          <h2 className="font-semibold mb-2">Company</h2>
          <ul className="pl-4 list-disc space-y-1">
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

      <Link to="/" className="inline-block mt-4 text-blue-600 hover:underline">
        Back to Users
      </Link>
    </div>
  );
};

export default UserDetails;
