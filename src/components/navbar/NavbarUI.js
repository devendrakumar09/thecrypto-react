import React, { useState } from 'react'

const NavbarUI = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* <header class="h-24 sm:h-32 flex items-center">
                <div class="container mx-auto pl-8 flex items-center justify-between">
                    <div class="uppercase text-blue-700 flex flex-col items-center">
                        <div class="text-2xl">Logo<strong class="font-bold">Company</strong></div>
                        <small class="tracking-widest">Your tagline goes here</small>
                    </div>
                    <div class="flex items-center">
                        <nav class="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                            <a href="#" class="py-2 px-8 hover:underline">
                                Home
                            </a>
                            <a href="#" class="py-2 px-8 hover:underline">
                                Services
                            </a>
                            <a href="#" class="py-2 px-8 hover:underline">
                                About
                            </a>
                            <a href="#" class="py-2 px-8 hover:underline">
                                Contact
                            </a>
                            <a href="#" class="py-2 px-8 hover:underline">
                                FAQ
                            </a>
                        </nav>
                        <button class="ml-4 w-6 h-6 flex flex-col lg:hidden mr-8">
                            <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                            <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                            <span class="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                        </button>
                    </div>
                </div>
            </header> */}
            {/* <div class="flex flex-wrap place-items-center">
                <section class="relative mx-auto">
                    <nav class="flex justify-between bg-white shadow-lg text-dark w-screen">
                        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                            <a class="text-3xl font-bold font-heading" href="#">
                                <img class="h-9" src="logo.png" alt="logo" />
                            </a>
                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><a class="hover:text-gray-200" href="#">Home</a></li>
                                <li><a class="hover:text-gray-200" href="#">Catagory</a></li>
                                <li><a class="hover:text-gray-200" href="#">Collections</a></li>
                                <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
                            </ul>
                            <div class="hidden xl:flex items-center space-x-5 items-center">
                                <a class="hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                                <a class="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span class="flex absolute -mt-5 ml-4">
                                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                        </span>
                                    </span>
                                </a>
                                <a class="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>

                            </div>
                        </div>
                        <a class="xl:hidden flex mr-6 items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a class="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>

                </section>
            </div> */}


            <nav className="bg-white p-4 shadow-lg border">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-2xl font-bold">MyLogo</div>
                    <div className="hidden md:flex space-x-4 mx-auto">
                        <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                        <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded">About</a>
                        <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded">Services</a>
                        <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
                    </div>

                    <div className="hidden xl:flex items-center space-x-5 ">
                        <a class="hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                        <a class="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a class="flex items-center hover:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>

                    </div>


                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isOpen ? 'Close' :
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* Off-canvas menu with transition */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}      >
                <div className={`absolute right-0 bg-white w-64 h-full shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">Close</button>
                    </div>
                    <div className="flex flex-col p-4">
                        <a href="#" className="py-2 text-gray-800 hover:bg-gray-200 rounded">Home</a>
                        <a href="#" className="py-2 text-gray-800 hover:bg-gray-200 rounded">About</a>
                        <a href="#" className="py-2 text-gray-800 hover:bg-gray-200 rounded">Services</a>
                        <a href="#" className="py-2 text-gray-800 hover:bg-gray-200 rounded">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarUI