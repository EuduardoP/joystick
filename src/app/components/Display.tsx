import Button from '@/app/components/Button'

type ClawProps = {
    openClawState?: boolean,
}

export default function Display({openClawState}:ClawProps){
    return (
        <div className='flex items-center flex-row flex-1 m-2 justify-between'>
           <canvas className='bg-black m-6 rounded-lg flex-1 max-h-80'>
                
            </canvas>
            <Button isOpen={openClawState} />
            
        </div>
    )
}