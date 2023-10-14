'use client'
import { LogOut } from 'lucide-react'
import { useState } from 'react'

type ClawProps = {
    openClawState?: boolean,
    isOpen?: boolean,
}

export default function Button({isOpen}: ClawProps) {

    const [openClawState, setOpenClawState] = useState(false);
    
    console.log(openClawState);
    return (
        <div className='flex items-center'>
          <button onClick={() => setOpenClawState(!openClawState)} className="text-d-co m-2 rounded-lg bg-d-re p-2 w-20">
            {openClawState ? 'Fechar' : 'Abrir'}
          </button>
          <button onClick={ () => console.log('Desconectando') }>
            <LogOut className='absolute top-16 right-4 m-4'/>
          </button>
        </div>
    )
}
