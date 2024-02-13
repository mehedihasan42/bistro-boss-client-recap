import SectionTitle from '../../../components/shared/SectionTitle/SectionTitle';
import ChefsCard from './ChefsCard';
import useMenu from '../../../components/hooks/useMenu';

const ChefsRcms = () => {
    const menu = useMenu()
    const items = menu?.filter(item => item.category === 'popular')
    return (
        <div className='my-4'>
            <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"/>
           <div className='flex space-x-3'>
           {
                items.map(item=><ChefsCard key={item._id} item={item}/>)
            }
           </div>
        </div>
    );
};

export default ChefsRcms;