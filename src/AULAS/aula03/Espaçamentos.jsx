import React from "react";

export default function Espaçamentos() {
    return (
        <div>
            <div className="p-4 m-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus modi nesciunt, placeat quia autem obcaecati, minima accusamus, architecto quisquam nulla ipsam sed quaerat omnis esse quae similique tenetur dolore dignissimos. </div>

            <div className="m-4 space-y-4">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            <div className="m-4 space-x-4">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    )
}