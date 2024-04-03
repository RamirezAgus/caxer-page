import Carrousel from '../components/carrousel';
import Main from '../components/main';
import Parterns from '../components/partners';
import Map from '../components/map';

export default function Home(){
    return(
        <div className='bg-cyan-500'>
            <Carrousel/>
            <Main />
            <Parterns/>
            <Map/>
        </div>
    )
}