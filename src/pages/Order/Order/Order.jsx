import React, { useRef, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../../components/shared/Cover/Cover';
import coverImg from '../../../assets/shop/order.jpg'
import useMenu from '../../../components/hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {

    const categories = ['dessert','drinks','salad','pizza','soup']
    const {category} = useParams()
    const [searchQuary,setSearchQuary] = useState('')
    const searchQuaryRef = useRef(null)
    const initialIndex = categories.indexOf(category)
    const [index,setIndex] = useState(initialIndex)
    const menu = useMenu()
   
    console.log(category)

    const handleSearchChange = ()=>{
      setSearchQuary(searchQuaryRef.current.value)
    }

    const filterMenu = menu.filter(item=>
      item.name.toLowerCase().includes(searchQuary.toLowerCase())
      )

      const renderMenuItems = (category) => {
        switch (category) {
            case "salad":
                return filterMenu.filter(item => item.category === "salad");
            case "drinks":
                return filterMenu.filter(item => item.category === "drinks");
            case "dessert":
                return filterMenu.filter(item => item.category === "dessert");
            case "pizza":
                return filterMenu.filter(item => item.category === "pizza");
            case "soup":
                return filterMenu.filter(item => item.category === "soup");
            default:
                return filterMenu;
        }
    };


    return (
       <div>
        <Cover img={coverImg} title="Order Now" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat veniam laborum nostrum eaque distinctio aut."></Cover>
        <input type="text"
        placeholder='Search'
        className="input input-bordered input-secondary my-4 w-full max-w-xs"
         onChange={handleSearchChange}
         ref={searchQuaryRef}
         />
         <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
        </TabList>
    
        <TabPanel>
         <OrderTab items={renderMenuItems('soup')}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={renderMenuItems('salad')}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={renderMenuItems('drink')}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={renderMenuItems('dessert')}></OrderTab>
        </TabPanel>
        <TabPanel>
         <OrderTab items={renderMenuItems('pizza')}></OrderTab>
        </TabPanel>
      </Tabs>
       </div>
    );
};

export default Order;