 import { Link } from 'react-scroll';
 
 function Header() {
    const links = ["Home", "Education", "Projects", "Skills", "Contact"]
    
    return (
        <header className="bg-slate-700 text-white py-5 px-16 fixed w-full z-10">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl" >Jerold Shin</h2>
                <nav>
                    <div className="flex items-center">
                        <ul className="flex flex-row text-xl gap-10">
                            {links.map((link) => (
                                <li className="cursor-pointer">
                                    <Link
                                        to={link}
                                        activeClass='bg-blue-500'
                                        spy={true}
                                        smooth={true}
                                        offset={-135}
                                        className="hover:bg-blue-500 px-3 py-2 rounded-md"
                                    >
                                    {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="ml-10">Light mode coming soon</div>
                    </div>
                </nav>
            </div>
        </header>
    )
 }

 export default Header