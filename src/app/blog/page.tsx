"use client";
import { useState } from "react";
import Sidebar from "../components/sidebar";

export default function Blog() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <button
                className={`fixed top-4 left-4 ${isOpen ? 'ml-64 md:ml-80 lg:ml-96' : 'ml-0'} p-4 bg-gradient-to-r from-sidebarNavigation to-sidebarButton text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                onClick={toggleSidebar}
            >
                {isOpen ? 'Uncover' : 'Discover'}
            </button>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="bg-mainbackground">

            </div>
        </div>
    )
}