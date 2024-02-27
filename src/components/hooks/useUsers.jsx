import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
  const axiosSecure = useAxiosSecure()
    const { data:userData=[], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
         const res = await axiosSecure.get('http://localhost:5000/users')
         return res.data;
        },
      })

    return [userData,refetch]
};

export default useUsers;