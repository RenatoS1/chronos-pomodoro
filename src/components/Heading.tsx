import styles from './Heading.module.css'

export function Heading() {
    const estilo = `${styles.heading} ${styles.cyan}`
    return <h1 className={estilo}>Olá Mundo !</h1>
}