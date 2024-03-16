import React from "react";

export default function Grid() {
    return (
        <>
            <div className="w-30 grid gap-4 bg-gray-500">
                <div className="col-span-2 flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="flex items-center justify-center text-white bg-blue-500">3</div>
                <div className="col-span-2 flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="flex items-center justify-center text-white bg-blue-500">3</div>
                <div className="flex items-center justify-center text-white bg-blue-500">1</div>
                <div className="col-span-3 flex items-center justify-center text-white bg-blue-500">2</div>
                <div className="flex items-center justify-center text-white bg-blue-500">3</div>
            </div>
        </>
    )
}