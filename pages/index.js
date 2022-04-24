import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TodoList from '../components/TodoList'

export default function Home({todos}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello All</h1>
      <TodoList todos={todos} />
    </div>
  )
}


export const getStaticProps = async () =>{
  const data =await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const todos=await data.json()

  return {
    props:{
      todos
    }
  }
}