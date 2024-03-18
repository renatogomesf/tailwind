import React from "react";

export default function TelaLogin() {
    return (
        <div className="flex flex-col justify-center items-center">

            <h1 className="my-4 font-bold text-lg">Login</h1>

            <form className="w-80 p-5 space-y-4 rounded-lg bg-white flex flex-col shadow-md" action="" method="post">

                <div className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input className="py-1 border border-gray-400 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300" type="email" name="email" id="email" required/>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="senha">Senha</label>
                    <input className="py-1 border border-gray-400 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300" type="password" name="senha" id="senha" required minLength={8}/>
                </div>

                <a className="w-40 hover:underline hover:text-blue-500" href="">Esqueci minha senha</a>

                <input className="py-2 font-semibold rounded hover:bg-blue-800 bg-blue-600 text-white cursor-pointer" type="submit" value="Login" />

            </form>
        </div>
    )
}