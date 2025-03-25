"use client";
import { useState } from "react";
import { CiLock, CiUnlock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-zinc-50 mb-8">Login</h1>
      <div className="mb-4">
        <div className="flex items-center bg-zinc-900 p-2 rounded">
          <span className="text-zinc-100 mr-2 text-[1.4rem]">
            <GoPerson />
          </span>
          <input
            type="text"
            className="bg-transparent w-75 h-10 focus:outline-none text-zinc-200"
            placeholder="Matrícula"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center bg-zinc-900 p-2 rounded">
          <span className="text-zinc-100 mr-2 text-[1.4rem]">
            <CiLock />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            className="bg-transparent w-66 h-10 focus:outline-none text-zinc-200"
            placeholder="Senha"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-zinc-400 hover:text-zinc-100 transition-colors p-2"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        <a
          href="#"
          className="text-green-400 text-[1rem] mt-2 inline-block float-right  hover:text-green-400/40 transition-colors duration-200"
        >
          Esqueceu a senha?
        </a>
      </div>
      <button
        className="w-full bg-green-400 text-zinc-800 py-3 
      rounded-xl font-bold overflow-hidden hover:bg-green-400/30 
      transition-colors cursor-pointer"
      >
        <span className="text-[1.2rem]">Entrar</span>
      </button>
    </div>
  );
}
