import styles from '@/app/styles/Joystick.module.css'

export default function Joystick() {
    return (
        <div className={styles.display}>
            <canvas>
                
            </canvas>
            <div className={styles.buttons}>
                <button>
                    Botão
                </button>
            </div>
        </div>
    )
}