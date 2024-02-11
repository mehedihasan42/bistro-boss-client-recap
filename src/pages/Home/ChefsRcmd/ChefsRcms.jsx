import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import ChefsCard from './ChefsCard';

const ChefsRcms = () => {
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
           <div className='flex space-x-3'>
           {
                menu.map(item=><ChefsCard item={item}/>)
            }
           </div>
        </div>
    );
};

export default ChefsRcms;