import styles from "./loader.module.scss"
export default function Loader(){
    return(
        <>
        <div className={styles.loader_wrap}>
            <div className={styles.loader_container}>
                <div className={styles.spinner}></div>
                <p>Please wait for data processing</p>
            </div>
        </div>
        </>
    )
}