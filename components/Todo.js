import Link from 'next/link'

const Todo = ({todo}) => {
  return (
      <Link href={`/todos/${todo.id}`} >
          <a>
              <h3>{todo.title }</h3>
          </a>
      </Link>
  )
}

export default Todo