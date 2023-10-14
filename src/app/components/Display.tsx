import Button from '@/app/components/Button'

type ClawProps = {
    openClawState?: boolean,
}

export default function Display({openClawState}:ClawProps){
    return (
        <div className='flex items-center flex-col'>
            <canvas className='bg-black m-2 rounded-lg sm:h-44 md:h-60'>
                
            </canvas>
            <Button isOpen={openClawState}/>
            
        </div>
    )
}