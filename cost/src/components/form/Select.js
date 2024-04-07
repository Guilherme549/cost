import styles from "./Select.module.css"

// componente para o Select
function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>
                    Selecione Uma opção
                </option>
            </select>
        </div>
    )
}

export default Select