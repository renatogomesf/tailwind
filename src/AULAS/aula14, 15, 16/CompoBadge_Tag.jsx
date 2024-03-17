import React from "react";

export default function CompoBadge_Tag() {
    return (
        <div className="flex gap-2">
            <div className="inline-flex items-center text-sm bg-green-100 px-1.5 py-0.5 rounded-full text-green-800 font-medium">
                Ativo
            </div>

            <div className="inline-flex items-center text-sm bg-red-100 px-1.5 py-0.5 rounded-full text-red-800 font-medium">
                Inativo
            </div>

            <div className="inline-flex items-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-full text-yellow-800 font-medium">
                Em progesso
            </div>
        </div>
    )
}