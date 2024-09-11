 import { useState } from 'react';
import { Link } from 'react-scroll';
 
 function Header() {
    const links = ["Home", "Education", "Projects", "Skills", "Contact"]
    const [toggle, setToggle] = useState(false);

    const toggleDarkMode = () => {
        document.getElementById('App').classList.toggle('dark')
    }
    
    return (
        <>
            <header className="bg-white shadow-lg dark:bg-slate-700 py-5 px-4 md:px-16 fixed w-full z-10">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl" >Jerold Shin</h2>
                    <nav>
                        <div className="flex items-center">
                            <ul className="flex-row text-xl gap-10 hidden lg:flex">
                                {links.map((link) => (
                                    <li className="cursor-pointer">
                                        <Link
                                            to={link}
                                            activeClass='bg-blue-500 text-white'
                                            spy={true}
                                            offset={-135}
                                            className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
                                        >
                                        {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => toggleDarkMode()}
                                    className="h-12 w-12 ml-6 rounded-lg p-2 hover:bg-slate-700 dark:hover:bg-slate-200">
                                <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                                <svg className="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        fillRule="evenodd" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <button onClick={() => setToggle(!toggle)} className='lg:hidden text-3xl pb-1'>{toggle ? '❌' : '☰'}</button>
                        </div>
                    </nav>
                </div>
            </header>
            {toggle && (
                <div className='right-5 top-24 fixed bg-cyan-200 dark:bg-indigo-500 p-5 z-50 rounded-xl lg:hidden'>
                    <ul className="flex flex-col items-center text-xl gap-10 lg:flex w-25">
                        {links.map((link) => (
                            <li className="cursor-pointer">
                                <Link
                                    to={link}
                                    activeClass='bg-blue-500 text-white'
                                    spy={true}
                                    offset={-135}
                                    className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md"
                                >
                                {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
 }

 export default Header