import React from "react";

export default function Responsividade() {
    return (
        <>
            <div className="max-sm:grid-cols-1 max-sm:bg-red-300 w-30 grid grid-cols-3 gap-4 bg-gray-500 ">
                <div className="flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="flex items-center justify-center text-white bg-blue-500">3</div>
                <div className="flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="flex items-center justify-center text-white bg-blue-500">3</div>
                <div className="flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="flex items-center justify-center text-white bg-blue-500">3</div>
            </div>
        </>
    )
}