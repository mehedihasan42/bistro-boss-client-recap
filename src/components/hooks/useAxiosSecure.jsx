import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate()

  // Create axios instance
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    // Add a request interceptor
    axiosSecure.interceptors.request.use(
      (config) => {
      const accessToken = localStorage.getItem('access-token');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // Unauthorized or Forbidden error
          logOut(); 
          navigate('/login'); 
        }
        return Promise.reject(error);
      }
    );
  }, [navigate,axiosSecure]);

  return axiosSecure;

};

export default useAxiosSecure;
