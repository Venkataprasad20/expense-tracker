import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

const useUserAuth = () => {
  const { user, updateUser, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(
          API_PATHS.AUTH.GET_USER_INFO
        );

        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        if (isMounted) {
          clearUser();
          navigate("/login");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    const token = localStorage.getItem("accessToken");

    if (!user && token) {
      fetchUserInfo();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [user, updateUser, clearUser, navigate]);

  return { user, loading };
};

export default useUserAuth;
