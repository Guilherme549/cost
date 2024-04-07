import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

function ProjectForm({btnText}){
    return (
        <form className={styles.form}>
            <div> 
                <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"></Input>
            </div>
            <div>
                <Input type="number" text="Orçamento total" name="budget" placeholder="Insira o orçamento total"></Input>
            </div>
            <div>
                <Select name="category_id" text="Selecione a categoria"></Select>
            </div>
            <div>
                <SubmitButton text={btnText}></SubmitButton>
            </div>
        </form>
    )
}

export default ProjectForm