import ProjectForm from ".././project/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adcionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"></ProjectForm>
        </div>
    )
}

export default NewProject