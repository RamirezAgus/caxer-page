import Carrousel from '../components/carrousel';
import Footer from '../components/footer';
import Main from '../components/main';
import Parterns from '../components/partners';


export default function Home(){
    return(
        <div>
            <Carrousel/>
            <Main />
            <Parterns/>
            <Footer/>
        </div>
    )
}