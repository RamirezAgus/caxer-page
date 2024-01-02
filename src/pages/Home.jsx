import Carrousel from '../components/carrousel';
import Main from '../components/main';
import Parterns from '../components/partners';


export default function Home(){
    return(
        <div className='bg-cyan-600'>
            <Carrousel/>
            <Main />
            <Parterns/>
        </div>
    )
}