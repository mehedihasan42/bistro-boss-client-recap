import { Helmet } from 'react-helmet-async';
import Cover from '../../../components/shared/Cover/Cover';
import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import MenuItems from './MenuItems';
import menuImg from '../../../assets/menu/menu-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../components/hooks/useMenu';

const Menu = () => {

   const [menu] = useMenu()

    const offers = menu.filter(item=>item.category === "offered")
    const salad = menu.filter(item=>item.category === "salad").slice(0,4)
    const drink = menu.filter(item=>item.category === "drinks").slice(0,4)
    const dessert = menu.filter(item=>item.category === "dessert").slice(0,4)
    const pizza = menu.filter(item=>item.category === "pizza").slice(0,4)
    const soup = menu.filter(item=>item.category === "soup").slice(0,4)

    return (
        <div className='space-y-6'>
            <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Cover img={menuImg} title="Our Menu" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
      <MenuItems items={offers} title="offers"></MenuItems>

      <Cover img={dessertImg} title="Soup" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={soup} title="soup"></MenuItems>

      <Cover img={dessertImg} title="DESSERTS" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={dessert} title="dessert"></MenuItems>
     

      <Cover img={soupImg} title="Drinks" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={drink} title="drinks"></MenuItems>
      

      <Cover img={saladImg} title="Salad" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={salad} title="salad"></MenuItems>
      

      <Cover img={pizzaImg} title="Pizza" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porro."></Cover>
      <MenuItems items={pizza} title="pizza"></MenuItems>
        </div>
    );
};

export default Menu;