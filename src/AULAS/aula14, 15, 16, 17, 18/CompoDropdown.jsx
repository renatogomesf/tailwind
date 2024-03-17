import React from "react";

export default function CompoDropdown() {
    return (
        <div className="relative">
            <button className="flex items-center bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-30 rounded px-2 py-1 text-sm outline-none transition duration-500 ease-in-out shadow">
                Drop

                <svg className="w-3 h-3 ml-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
            </button>

            <div className="absolute w-40 bg-white border border-gray-300 shadow-md rounded-md">
                
                <a href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 01</a>

                <a href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 02</a>

                <a href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 03</a>

                <a href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 04</a>

                <a href="" className="block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-300">Link 05</a>
            </div>
        </div>
    )
}