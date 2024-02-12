import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/shared/Cover/Cover';
import menuImg from "../../../assets/menu/menu-bg.jpg"
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import MenuItems from './MenuItems';

const Menu = () => {

    const [menu,setMenu] = useState([])

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>setMenu(data))
    },[])

    const offers = menu.filter(item=>item.category === "offered")
    const salads = menu.filter(item=>item.category === "salad")
    const salad =  salads.slice(0,4)
    const drinks = menu.filter(item=>item.category === "drinks")
    const drink =  drinks.slice(0,4)
    const desserts = menu.filter(item=>item.category === "dessert")
    const dessert =  desserts.slice(0,4)
    const pizzas = menu.filter(item=>item.category === "pizza")
    const pizza =  pizzas.slice(0,4)

    return (
        <div className='space-y-6'>
            <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover img={menuImg} title="Our Menu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
      <MenuItems items={offers}></MenuItems>

      <Cover img={menuImg} title="Our Menu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={salad}></MenuItems>

      <Cover img={menuImg} title="Our Menu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={drink}></MenuItems>

      <Cover img={menuImg} title="Our Menu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={dessert}></MenuItems>

      <Cover img={menuImg} title="Our Menu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={pizza}></MenuItems>
        </div>
    );
};

export default Menu;