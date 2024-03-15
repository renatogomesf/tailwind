import React from "react";

export default function Bordas() {
    return (
        <>
            <div className="m-4 p-4 border-l-2 border-red-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ex! Laborum doloribus rem accusamus quod quisquam. At quae aperiam suscipit ipsam facere quod atque, fugiat laudantium excepturi debitis ut!
            </div>

            <div className="m-4 p-4 border-2 border-yellow-400 rounded-xl border-opacity-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ex! Laborum doloribus rem accusamus quod quisquam. At quae aperiam suscipit ipsam facere quod atque, fugiat laudantium excepturi debitis ut!
                <br />
                <button className="bg-blue-600 my-4 px-4 py-2 rounded-lg duration-500 text-white hover:ring-8 ring-red-600">save</button>
            </div>
        </>
    )
}