import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const data = await axios.get(`${backendUrl}/api/admin/all-doctors`, {
        headers: { token },
      });
      if (data.data.success) {
        // toast.success(data.data.message);
        setDoctors(data.data.doctors);
      } else {
        toast.error(data.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const changeAvailability = async (docId) => {
    try {
      const data = await axios.patch(
        `${backendUrl}/api/admin/change-availability`,
        { docId },
        { headers: { token } }
      );
      if (data.data.success) {
        toast.success(data.data.message);
        getAllDoctors();
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const value = {
    token,
    setToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
