import React from "react";

function UserList({ users }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
