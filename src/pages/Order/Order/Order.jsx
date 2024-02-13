import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../components/shared/Cover/Cover';
import coverImg from '../../../assets/shop/order.jpg'
import useMenu from '../../../components/hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const [index,setIndex] = useState(0)
    const menu = useMenu()
    const salad = menu.filter(item=>item.category === "salad")
    const drink = menu.filter(item=>item.category === "drinks")
    const dessert = menu.filter(item=>item.category === "dessert")
    const pizza = menu.filter(item=>item.category === "pizza")
    const soup = menu.filter(item=>item.category === "soup")
    return (
       <div>
        <Cover img={coverImg} title="Order Now" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat veniam laborum nostrum eaque distinctio aut."></Cover>
         <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
        </TabList>
    
        <TabPanel>
         <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={drink}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={pizza}></OrderTab>
        </TabPanel>
      </Tabs>
       </div>
    );
};

export default Order;