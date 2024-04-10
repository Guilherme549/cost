import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"
import { useEffect, useState } from "react"

function ProjectForm({btnText}){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {
            'Content-Type': 'aplication/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) =>{
        setCategories(data)
    })
    .catch(err => console.log(err))
    }, [])
    return (
        <form className={styles.form}>
            <div> 
                <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"></Input>
            </div>
            <div>
                <Input type="number" text="Orçamento total" name="budget" placeholder="Insira o orçamento total"></Input>
            </div>
            <div>
                <Select name="category_id" text="Selecione a categoria" options={(categories)}></Select>
                <h1>Oi</h1>
            </div>
            <div>
                <SubmitButton text={btnText}></SubmitButton>
            </div>
        </form>
    )
}

export default ProjectForm