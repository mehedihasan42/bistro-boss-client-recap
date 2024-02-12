import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import MenuCard from '../../../components/shared/MenuCard/MenuCard';

const PolularManu = () => {
    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const items = data?.filter(item => item.category === 'popular')
            setMenu(items)
        })
    },[])

    return (
        <div className='my-4'>
            <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"/>
           <div className='grid grid-cols-2 justify-between'>
           {
                menu.map(item=><MenuCard key={item._id} item={item}/>)
            }
           </div>
           <div>
            <p className='text-center text-2xl mt-20 mb-6 py-10 font-bold p-6 bg-black text-white'>Call Us: +88 0192345678910</p>
           </div>
        </div>
    );
};

export default PolularManu;