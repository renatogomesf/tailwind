import React from "react";

export default function HoverFocus() {
    return (
        <>
            <div className="m-4">
                <div className="text-5xl font-bold hover:text-blue-400 hover:underline">Hover</div>

                <div className="group mt-4 p-4 w-72 bg-gray-200">

                    <h4 className="font-bold group-hover:text-blue-400">TITULO</h4>

                    <p className="text-gray-500 text-sm group-hover:text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>
                
                <input className="mt-4 bg-gray-100 text-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500" type="text" name="" id="" />
            </div>
        </>
    )
}