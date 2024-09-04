import Link from 'next/link';
import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed top-0 left-0 h-full bg-sidebarNavigation text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out font-mono w-55 md:w-80 lg:w-96`}>
            <h1 className="text-xl pl-8 pt-10 font-bold">Data + ML</h1>
            <ul className="pt-12">
                <Link href="/">
                    <li className="p-6 text-xl hover:bg-gradient-to-r from-mainbackground to-sidebarNavigation transform hover:scale-100 transition-transform duration-300">home</li>
                </Link>

                <Link href="/experience">
                    <li className="p-6 text-xl hover:bg-gradient-to-r from-mainbackground to-sidebarNavigation transform hover:scale-100 transition-transform duration-300">experience</li>
                </Link>

                <Link href="/blog">
                    <li className="p-6 text-xl hover:bg-gradient-to-r from-mainbackground to-sidebarNavigation transform hover:scale-100 transition-transform duration-300">blog</li>
                </Link>
                <Link href="/vibe">
                    <li className="p-6 text-xl hover:bg-gradient-to-r from-mainbackground to-sidebarNavigation transform hover:scale-100 transition-transform duration-300">vibe</li>
                </Link>
                <Link href="https://docs.google.com/document/d/1sAxbOTUCMS7ySGInRDqXbvVe0MtoFm3EXNReo4PuNGo/edit?usp=sharing" target='_blank' rel='noopener noreferrer'>
                    <li className="p-6 text-xl hover:bg-gradient-to-r from-mainbackground to-sidebarNavigation transform hover:scale-100 transition-transform duration-300">resume</li>
                </Link>
                <Link href="mailto:randolf09@gmail.com " target='_blank' rel='noopener noreferrer'>
                    <li className="p-6 text-xl hover:bg-gradient-to-r from-mainbackground to-sidebarNavigation transform hover:scale-100 transition-transform duration-300">contact</li>
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;