'use client';
import { LogOut } from "lucide-react";
import Image from "next/image"
// import styles from "../styles/Navbar.module.css"


export default function Navbar({setOpenModal}: { setOpenModal: (isOpen: boolean) => void }) {
    return (
        <div className="flex bg-d-wh m-2 p-2 rounded-md text-d-co items-center justify-between">
        <Image
          src="/icon-page.svg"
          width={45}
          height={45}
          alt="Logo do site"
        />

        <h1 className="text-2xl">
          Joystick do Braço Robótico
        </h1>
        <div className="flex justify-between items-center">
          <button onClick={() => setOpenModal(true)} className="bg-d-gr rounded-lg p-2 mr-2">
            O que é o PET-EE
          </button>
          <button onClick={() => console.log('Desconectando')} className="m-4">
            <LogOut />
          </button>
        </div>
      </div>
      
    )
}