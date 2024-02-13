import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../components/shared/Cover/Cover';
import coverImg from '../../../assets/shop/order.jpg'

const Order = () => {
    const [index,setIndex] = useState(0)
    return (
       <div>
        <Cover img={coverImg} title="Order Now" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat veniam laborum nostrum eaque distinctio aut."></Cover>
         <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
    
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
       </div>
    );
};

export default Order;