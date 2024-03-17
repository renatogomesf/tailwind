import React from "react";

export default function CompoButton(props) {
    return (
        <button className="
            bg-blue-400
            px-4
            py-1
            rounded
            text-white
            shadow
            hover:bg-blue-600
        ">
            {props.nome}
        </button>
    )
}