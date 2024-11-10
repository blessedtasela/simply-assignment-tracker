import { Link } from '@tanstack/react-router'
import { assignmentUseStore } from '../../models/store'
import { AiOutlineAlignLeft, AiOutlineDelete, AiOutlineX } from 'react-icons/ai'
import { useState } from 'react';

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const deleteAllAssignments = assignmentUseStore((state) => state.clearAllAssignments)

    return (
        <>
            <nav>
                <div className="flex p-2 items-center justify-between gap-12 transform ease-in-out transition-all duration-500">
                    <div>
                        <Link to="/">
                            <img src="src/assets/SAT logo.png" className='w-48' />
                        </Link>
                    </div>
                    <div className="flex gap-24">
                        <div className="hidden md:block">
                            <ul className="p-4 flex items-center gap-24">
                                <li className="cursor-pointer hover:scale-105 hover:text-purple-500">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:scale-105 hover:text-purple-500">
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                                <li className="cursor-pointer hover:scale-105 hover:text-purple-500">
                                    <Link to='/contact'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    |<div className='text-red-600 flex justify-end mr-8 cursor-pointer' onClick={deleteAllAssignments}>
                        <AiOutlineDelete size={20} />
                    </div>
                    {
                        !menuOpen && (
                            <div className="md:hidden p-2 text-black">
                                <AiOutlineAlignLeft onClick={toggleMenu}
                                    className="text-purple-500 p-2 cursor-pointer md:hidden"
                                    size={40} />
                            </div >
                        )
                    }
                    {
                        menuOpen && (
                            <div className="md:hidden p-2 text-black">
                                <AiOutlineX onClick={toggleMenu}
                                    className="text-purple-500 p-2 cursor-pointer md:hidden"
                                    size={40} />
                            </div >
                        )
                    }

                </div>

                <div
                    className={`md:hidden block w-full bg-white rounded-b-lg transform ease-in-out transition-all duration-500
                         ${!menuOpen ? 'opacity-0 max-h-0' : 'opacity-100 max-h-96'}`}>
                    <div className="flex-col items-center justify-center gap-8 text-xl mt-4 ml-8">
                        <ul className="p-4 flex-cols items-center justify-center gap-4 space-y-8 font-mono gap-8">
                            <li className="cursor-pointer hover:scale-105 hover:text-purple-500">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:scale-105 hover:text-purple-500">
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="cursor-pointer hover:scale-105 hover:text-purple-500">
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul >
                    </div >
                </div >

            </nav >
        </>
    )
}