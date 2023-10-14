'use client'
import styles from "../styles/Modal.module.css"
import Image from "next/image"

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
                        <Image 
                        src="/xmark-solid.svg"
                        width={80}
                        height={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="Close" />    
                    </span>
                <div>

                <Image 
                src="/pet.png"
                width={150}
                height={150}
                alt="Logo do Pet-ee"/>

                <p>
                O Programa de Educação Tutorial é um programa do Ministério da Educação, desenvolvido por grupos de estudantes, com tutoria de um docente, organizados a partir de formações em nível de graduação nas Instituições de Ensino Superior do País orientados pelo princípio da indissociabilidade entre ensino, pesquisa e extensão e da educação tutorial. O grupo PET Engenharia Elétrica foi criado em 1995 e é composto de 12 alunos bolsistas, 6 alunos não-bolsistas e um professor tutor.
                </p>
                </div>
                </div>
            </div>
        )
    }
    return null
}