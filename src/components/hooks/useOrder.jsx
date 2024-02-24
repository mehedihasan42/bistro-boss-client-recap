import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const useOrder = () => {
    const {user} = useContext(AuthContext)
    const { data: orderData=[],refetch } = useQuery({
        queryKey: ['order',user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order?email=${user?.email}`)
            return res.json()
          },
      })
    return [orderData,refetch]
};

export default useOrder;