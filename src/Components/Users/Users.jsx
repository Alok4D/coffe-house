import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <h2 className="text-2xl font-semibold text-center text-[#4b3832] mb-6">
        All Users ({users.length})
      </h2>

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#8c6239] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider border-r border-gray-300">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider border-r border-gray-300">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider border-r border-gray-300">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-100 transition duration-300"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 border-r">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
