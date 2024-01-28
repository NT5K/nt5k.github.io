import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigationLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="bg-gray-900 text-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>


                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Logo section */}
                    <div className="flex-1 flex justify-center sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            {/* Logo here */}
                            <span className="text-white font-semibold text-xl">TYSH.DEV</span>
                        </div>
                    </div>

                    {/* Links section */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            {navigationLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state. */}
            <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigationLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;