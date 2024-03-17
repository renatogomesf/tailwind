import React from "react";

import CompoButton from "./CompoButton";
import CompoBadge_Tag from "./CompoBadge_Tag";
import CompoInput from "./CompoInput";

export default function CompoCard() {
    return (
        <>
            <div className="space-y-2 container mx-auto px-4 py-8 bg-gray-100 ">

                <CompoBadge_Tag></CompoBadge_Tag>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">


                    <div className="w-full bg-gray-100 p-4 border-b border-gray-200">
                        <h2 className="font-bold">Título do card</h2>
                    </div>

                    <div className="p-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, in velit! Exercitationem ratione perspiciatis iste cupiditate quo sequi sunt, dicta voluptatibus iusto alias praesentium molestiae. Aliquam dignissimos cumque optio. Quis
                    </div>

                    <div className="w-full bg-gray-50 p-3 border-b border-gray-100">
                        Rodapé
                    </div>


                </div>

                <CompoButton></CompoButton>
                <br />
                <CompoInput></CompoInput>
                
            </div>
        </>
    )
}