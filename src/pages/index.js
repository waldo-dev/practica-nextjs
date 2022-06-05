import styles from "../styles/Home.module.css"
import axios from "axios"
import { useState } from "react"

export default function Home({tasks}) {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {title: title, description: description}
    const res = await axios.post('http://localhost:3000/api/tasks', data)
    console.log(res)
  }

  return (
    <>
      <h2 className={styles.formTitle}>Añadir Tarea</h2>
      <form className={styles.form} onSubmit={e => handleSubmit(e)}>
        <input className={styles.input} placeholder="Titulo" type="text" onChange={(e) => setTitle(e.target.value)} />
        <input className={styles.input} placeholder="Descripcion" type="text" onChange={(e) => setDescription(e.target.value)} />
        <button className={styles.button} onClick={e => handleSubmit(e)}>Enviar</button>
      </form>
      <ul className={styles.list}>
        {tasks.map((task, i) => {
          return (
        <li key={i} className={styles.item}>
          <h3 className={styles.title}>{task.title}</h3>
          <p className={styles.description}>{task.description}</p>
        </li>
          )
        })}
      </ul>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/tasks')
  const tasks = await res.data
  return {
    props: {
      tasks
    }
  }
}