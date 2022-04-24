import React from 'react'
import Link from 'next/link'

const todo = (todo) => {
  return (
    <div>
        <h1>Id : {todo.todo.id}</h1>
        <h1>UserId : {todo.todo.userId}</h1>
        <h1>Title : {todo.todo.title}</h1>
        <Link href='/' >
          <a>Back</a>
        </Link>
    </div>
  )
}

//export const getServerSideProps = async (context) =>{
export const getStaticProps = async (context) =>{
    const data =await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`)
    const todo = await data.json()
  
    return {
      props:{
        todo
      }
    }
  }

export const getStaticPaths = async () =>{
  const data =await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const todos = await data.json()
  const ids= todos.map((todo) => todo.id)
  const paths = ids.map((id)=>({params:{id: id.toString()}}))

    return {
      paths,
      fallback:false,
  }
}
export default todo