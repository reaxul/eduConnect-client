import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UserProfile = () => {
    const {user}=useContext(AuthContext)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    photoUrl: 'https://example.com/profile.jpg',
  });

  return (
    <div className="p-4 py-60 bg-gray-900 rounded-lg shadow-md pt-20">
      <div className="flex flex-col items-center justify-center mb-4">
        <img
          src={user?.photoURL}
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover border-4 border-indigo-500"
        />
        <h2 className="mt-2 text-2xl font-semibold text-indigo-700">{user?.displayName}</h2>
      </div>
      <div className="border-t border-gray-300 pt-4">
        <div className="flex items-center mb-2">
          <span className="font-bold mr-2">Name:</span>
          <span className="">{user?.displayName}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="font-bold mr-2">Email:</span>
          <span className="">{user?.email}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="font-bold mr-2">Last sign in:</span>
          <span className="">{user?.metadata.lastSignInTime}</span>
        </div>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default UserProfile;
