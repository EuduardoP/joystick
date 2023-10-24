'use client'
import Image from "next/image"
import { X } from "lucide-react"

type ModalProps = {
    isOpen: boolean;
    setModalOpen: (isOpen: boolean) => void;
}

export default function Modal({ isOpen, setModalOpen }: ModalProps) {
    if (isOpen) {
      return (
        <div className="h-full w-full bg-d-wh bg-opacity-70 z-30 fixed flex">
          <div className="bg-opacity-100 bg-d-wh text-d-co fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl ">
            <span onClick={() => setModalOpen(false)} className="absolute top-4 right-4 w-5 h-5 cursor-pointer">
              <X className="stroke-black" />
            </span>
            
            <div className="text-justify">
              <Image 
                src="/pet.png" 
                width={150} 
                height={150} 
                alt="Logo do Pet-ee" 
                className="block m-auto"
              />

              <p className="mt-4 text-sm">
                O Programa de Educação Tutorial (PET) é uma iniciativa do Ministério da 
                Educação que visa o desenvolvimento de grupos de estudantes, orientados 
                por um docente, e formados a partir de graduações nas Instituições de 
                Ensino Superior do país. Esse programa é fundamentado nos princípios da 
                indissociabilidade entre ensino, pesquisa e extensão, bem como na educação 
                tutorial.
                <p>
                  Em 1995, foi estabelecido o grupo PET Engenharia Elétrica, o qual é 
                  composto por um total de 12 alunos bolsistas, 6 alunos não-bolsistas e 
                  um professor tutor.
                </p>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }