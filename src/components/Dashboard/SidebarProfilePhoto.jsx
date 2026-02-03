// import React, { useState } from "react";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import SideMenu from "./SideMenu";

// const Navbar = ({ activeMenu }) => {
//   const [openSideMenu, setOpenSideMenu] = useState(false);

//   return (
//     <div className="flex items-center gap-5 bg-white border-b border-gray-200/50 py-4 px-7 sticky top-0 z-30">
//       <button
//         className="block lg:hidden text-black"
//         onClick={() => setOpenSideMenu(!openSideMenu)}
//       >
//         {openSideMenu ? (
//           <HiOutlineX className="text-2xl" />
//         ) : (
//           <HiOutlineMenu className="text-2xl" />
//         )}
//       </button>

//       <h2 className="text-lg font-medium text-black">
//         Expense Tracker
//       </h2>

//       {/* Mobile Side Menu */}
//       {openSideMenu && (
//         <div className="fixed top-[61px] left-0 w-64 bg-white shadow-lg z-40">
//           <SideMenu activeMenu={activeMenu} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useRef, useState } from "react";
import { LuCamera } from "react-icons/lu";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const SidebarProfilePhoto = ({ imageUrl, onUpdate }) => {
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleChoose = () => {
    fileRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axiosInstance.post(
        API_PATHS.IMAGE.UPDATE_PROFILE,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      onUpdate(res.data.imageUrl); // 🔑 update UI
    } catch (err) {
      console.error("Profile update failed", err);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-20 h-20 rounded-full object-cover"
      />

      <button
        type="button"
        onClick={handleChoose}
        className="absolute bottom-0 right-0 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center shadow-md hover:bg-purple-700"
      >
        <LuCamera className="text-white text-sm" />
      </button>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={loading}
      />
    </div>
  );
};

export default SidebarProfilePhoto;
