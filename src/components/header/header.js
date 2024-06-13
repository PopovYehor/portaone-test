import styles from "./header.module.scss"
export default function Header(){
    return(
        <header className={styles.header}>
            <h2>Database calculator</h2>
        </header>
    )
}