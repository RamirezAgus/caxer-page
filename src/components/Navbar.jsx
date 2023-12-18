import { Link } from "react-router-dom";
import '../css/dropdown.css';
import logo from '../assets/logo-caxer.png'


export default function Navbar() {

    return (
        <nav className='flex items-center justify-between f bg-cyan-500 z-10 relative constainer'>
            <div className='flex item-center'>
                <Link to='/'><img className="pl-4 w-9/12" src={logo} alt="logo"/></Link>
            </div>
            <div className="container mx-auto flex justify-end items-center pr-4">
                <div className="text-sm flex space-x-4 text-white items-center">
                    <Link to='/conocenos' className='px-4'>
                        Conocenos
                    </Link>
                    <Link to='/soluciones' className='px-4'>
                        Soluciones
                    </Link>
                    <div className="dropdown inline-block relative">
                        <button className="bg-cyan-500 text-white py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-1">Servicios</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                            <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                        </ul>
                    </div>
                    <div className="dropdown inline-block relative">
                        <button className="bg-cyan-500 text-white py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-1">Post Venta</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                            <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}