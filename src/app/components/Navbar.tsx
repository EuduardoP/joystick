'use client';
import Image from "next/image"
import styles from "../styles/Navbar.module.css"


export default function Navbar({setOpenModal}: { setOpenModal: (isOpen: boolean) => void }) {
    return (
        <ul className={styles.navbar}>
            <div>
            <Image 
                src="/icon-page.svg"
                width={80}
                height={80}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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