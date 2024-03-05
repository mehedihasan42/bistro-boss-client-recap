import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useOrder = () => {
    const {user,loading} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const token = localStorage.getItem('access-token')
    const { data: orderData=[],refetch } = useQuery({
        queryKey: ['order',user?.email],
        enabled:!loading,
        queryFn: async () => {
            const data = await axiosSecure.get(`/order?email=${user?.email}`)
            return data.data;
          },
      })
    return [orderData,refetch]
};

export default useOrder;