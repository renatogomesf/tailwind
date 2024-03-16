import React from "react";

export default function Flexbox() {
    return (
        <>
            <div className="flex space-x-4 bg-gray-500 h-36 justify-center items-center">
                <div className="w-20 h-20 flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="w-20 h-20 flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="w-20 h-20 flex items-center justify-center text-white bg-blue-500">3</div>
            </div>

            <br />

            <div className="flex space-x-4 bg-gray-500 h-36 justify-center items-center">
                <div className="w-20 h-20 flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="grow h-20 shrink-0 w-20 flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="w-20 h-20 flex items-center justify-center text-white bg-blue-500">3</div>
            </div>
        </>
    )
}