"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/sidebar";

export default function Experience() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative min-h-screen bg-mainbackground font-mono">
            <button
                className={`fixed top-4 left-4 ${isOpen ? 'ml-64 md:ml-80 lg:ml-96' : 'ml-0'} p-4 bg-gradient-to-r from-darkergreen to-darkestgreen text-black rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                onClick={toggleSidebar}
            >
                {isOpen ? 'Uncover' : 'Discover'}
            </button>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-center items-left space-y-12 pr-5 text-black pt-24">
                    <div className="max-w-3xl text-left p-5">
                        <h1 className="text-2xl font-bold">Computer Science @ SFSU</h1>
                        <p className="text-1xl mt-4">Summer 2023 - Winter 2024</p>
                        <div className='flex flex-row space-x-10 pt-5 items-center'>
                            <img src='/images/Go.png' className='max-h-12 max-w-12' />
                            <img src='/images/Java.png' className='max-h-12 max-w-12' />
                            <img src='/images/C++.png' className='max-h-12 max-w-12' />
                            <img src='/images/MongoDB.png' className='max-h-12 max-w-14' />
                            <img src='/images/MySQL.png' className='max-h-12 max-w-14' />
                            <img src='/images/PostgreSQL.png' className='max-h-14 max-w-14' />
                        </div>
                        <p className="text-1xl mt-4">Technology Stack: Programming Languages [Python, Go, Java, Typescript, C/C++], Databases [MySQL, PostgreSQL, MongoDB], Frameworks [React, Express, Django], ML/AI [PyTorch, Keras, Tensorflow]</p>
                        <p className="text-1xl mt-4">Relavant Coursework: CSC 220 [Data Structures], CSC 230 [Discrete Mathematics with Computing], CSC 413 [Software Development], CSC 510 [Analysis of Algorithms], CSC 648 [Software Engineering], CSC 665 [Artificial Intelligence]</p>
                        <p className="text-1xl mt-4">Software Design Patterns / Topics: Distributed Systems, Object Oriented Programming [Inheritance, Polymorphism], Software Design Patterns [Factory, Singleton, Observer]</p>
                        <p className="text-1xl mt-4">Additional: ACM, Data Science Society</p>
                    </div>
                    <div className="max-w-3xl text-left items-center p-5">
                        <h1 className="text-3xl font-bold">Data Engineer Intern @ PwC</h1>
                        <p className="text-1xl mt-4">June 2024 - August 2024</p>
                        <div className='flex flex-row space-x-10 pt-5 items-center'>
                            <img src='/images/Python.png' className='ml-15 max-h-12 max-w-12' />
                            <img src='/images/graphQL.png' className='max-h-12 max-w-12' />
                            <img src='/images/Docker.png' className='max-h-12 max-w-12' />
                            <img src='/images/Kubernetes.png' className='max-h-12 max-w-12' />
                            <img src='/images/Django.png' className='max-h-12 max-w-12' />
                        </div>
                        <p className="text-1xl mt-4">Technology Stack: Python, Kubernetes, Docker, GraphQL, Airflow</p>
                        <p className="text-1xl mt-4">Project [Internal Tooling]: Implemented an integration into the script that leverages Kubernetes to pull docker images and perform operations to pull information used within configurations for each codebase. Saves ~3 hours per release cycle by tracking helm.</p>
                        <p className="text-1xl mt-4">Project [Backend Services]: Refractored PwC service that utilizes GraphQL endpoints by ensuring that a parameter either gets passed down to the request level or the parameter gets assigned with an apporiate value if it does not recieve one from the GraphQL request. Increases fault tolerance and scope of the service to include all containers.</p>
                    </div>
                    <div className="max-w-3xl text-left items-center p-5" >
                        <h1 className="text-3xl font-bold">Technology Consulting Intern @ PwC</h1>
                        <p className="text-1xl mt-4">May 2023 - July 2023</p>
                        <div className='flex flex-row space-x-5 pt-5 items-center'>
                            <img src='/images/Python.png' className='max-h-12 max-w-12' />
                            <img src='/images/PowerBI.png' className='max-h-12 max-w-12' />
                            <img src='/images/Tableau.png' className='max-h-16 max-w-17' />
                            <img src='/images/Excel.png' className='max-h-12 max-w-12' />
                        </div>
                        <p className="text-1xl mt-4">Technology Stack: Python, Excel, Power-BI, Tableau</p>
                        <p className='text-1xl mt-4'>Achievement: Team achieved top 6 placement across all consulting pods in the US (~72 teams)</p>
                        <p className="text-1xl mt-4">Project [Script]: Lead efforts on market analysis by creating python script that scraped direct/indirect competitor information for client and identified their key features and/or weaknesses.</p>
                        <p className="text-1xl mt-4">Project [Data Transformation]: Created insights on customer data through excel spreadsheets provided by the client. Utilized exel formulas to extract key data points and displayed to client using Power BI and Tableau.</p>
                    </div>
                    <br></br>
                    <br></br>
                </div>
                <div className="flex flex-col flex-grow items-center space-y-24 pt-24 bg-white">
                    <br></br>
                    <a href='https://cs.sfsu.edu' target='_blank' rel='noopener noreferrer'>
                        <img src='/images/SFSU.png' className="border rounded-[20%] border-black shadow-xl hover:shadow-[0_35px_35px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out bg-white" style={{ borderWidth: '4px', height: '22rem', width: '22rem' }} />
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href='https://www.pwc.com/us/en.html' target='_blank' rel='noopener noreferrer'>
                        <img src="/images/PWC.png" className="border rounded-[20%] border-black shadow-xl hover:shadow-[0_35px_35px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out bg-white" style={{ borderWidth: '4px', height: '22rem', width: '22rem' }} />
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href='https://www.pwc.com/us/en.html' target='_blank' rel='noopener noreferrer'>
                        <img src="/images/PWC.png" className="border rounded-[20%] border-black shadow-xl hover:shadow-[0_35px_35px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out bg-white" style={{ borderWidth: '4px', height: '22rem', width: '22rem' }} />
                    </a>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    )
}