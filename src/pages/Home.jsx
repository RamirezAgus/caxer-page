import Carrousel from '../components/carrousel';
import Main from '../components/mainHome';
import Parterns from '../components/partners';
import Map from '../components/map';
import Products from '../components/products';

export default function Home(){
    return(
        <div className='bg-cyan-500'>
            <Carrousel/>
            <Products/>
            <Main />
            <Parterns/>
            <Map/>
        </div>
    )
}