// "use client";

// import { useAuth } from "@/lib/contexts/AuthContext";
// import { useState } from "react";
// import {
//   updateProfile,
//   updateEmail,
//   sendEmailVerification,
// } from "firebase/auth";
// import { auth } from "@/lib/firebase";

// const ProfilePage = () => {
//   const { user, isLoading } = useAuth();
//   const [displayName, setDisplayName] = useState(user?.displayName || "");
//   const [email, setEmail] = useState(user?.email || "");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       if (displayName !== user.displayName) {
//         await updateProfile(auth.currentUser, { displayName });
//       }
//       if (email !== user.email) {
//         await updateEmail(auth.currentUser, email);
//         await sendEmailVerification(auth.currentUser);
//       }
//       setSuccess(true);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//       setSuccess(false);
//     }
//   };

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (!user) {
//     return <h1>Please login to view your profile.</h1>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       {success && (
//         <p className="text-green-500 mb-4">
//           Profile updated successfully! Please verify your email if you changed
//           it.
//         </p>
//       )}
//       <form onSubmit={handleUpdateProfile}>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="displayName"
//           >
//             Display Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="displayName"
//             type="text"
//             value={displayName}
//             onChange={(e) => setDisplayName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Update Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePage;
