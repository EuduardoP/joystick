'use client'
import styles from "../styles/Modal.module.css"
import Image from "next/image"
import { X } from "lucide-react"

type ModalProps = {
    isOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
}

export default function Modal({isOpen, setModalOpen}: ModalProps) {

    if (isOpen) {
        return (
            <div className={styles.backgroudModal}>
                <div className={styles.contentModal}>
                    <span onClick={() => setModalOpen(false)} className={styles.close}>
                        <X className="stroke-black"/>  
                    </span>
                <div>

                <Image 
                src="/pet.png"
                width={150}
                height={150}
                alt="Logo do Pet-ee"/>

                <p>
                O Programa de Educação Tutorial (PET) é uma iniciativa do Ministério da Educação que visa o desenvolvimento de grupos de estudantes, orientados por um docente, e formados a partir de graduações nas Instituições de Ensino Superior do país. Esse programa é fundamentado nos princípios da indissociabilidade entre ensino, pesquisa e extensão, bem como na educação tutorial.
                <p>
                Em 1995, foi estabelecido o grupo PET Engenharia Elétrica, o qual é composto por um total de 12 alunos bolsistas, 6 alunos não-bolsistas e um professor tutor.
                </p>
                </p>
                
                </div>
                </div>
            </div>
        )
    }
    return null
}