import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
  const axiosSecure = useAxiosSecure()
 const {data:menu=[],refetch} = useQuery({
  queryKey:['menu'],
  queryFn:async()=>{
    const data = await axiosSecure.get('/menu')
    return data.data;
  }
 })

  return [menu,refetch];
};

export default useMenu;

// const [menu, setMenu] = useState([]);

// useEffect(() => {
//   fetch("http://localhost:5000/menu")
//     .then((res) => res.json())
//     .then((data) => setMenu(data));
// }, []);