import styles from "./SubmitButton.module.css"

// componente para o SubmitButton
function SubmitButton({text}){
    return(
        <div>
           <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton