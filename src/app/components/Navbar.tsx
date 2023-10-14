'use client';
import Image from "next/image"
import styles from "../styles/Navbar.module.css"


export default function Navbar({setOpenModal}: { setOpenModal: (isOpen: boolean) => void }) {
    return (
        <ul className={styles.navbar}>
            <div>
            <Image 
                src="/icon-page.svg"
                width={45}
                height={45}
                sizes="(max-width: 100px) 10vh, (max-width: 300px) 30vh, 40vh"
                alt="Logo do site" />
            <li className={styles.title}>
                Joystick do Braço Robótico
            </li>
            </div>
            <button onClick={() => setOpenModal(true)}>
                O que é o PET-EE
            </button>
        </ul>
    )
}