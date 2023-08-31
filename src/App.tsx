import { ChangeEvent, FormEvent, useState } from 'react'

import { Todos } from './components/Todos'

const mockTodos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Buy eggs', completed: false },
  { id: 3, text: 'Buy bread', completed: false }
]

export default function App() {
  const [todos, setTodos] = useState(mockTodos)
  const [todo, setTodo] = useState('')

  function handleRemove(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  function handleCompleted(id: number, completed: boolean) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const newId = todos?.slice(-1)[0]?.id + 1 || 1

    const newTodo = [
      ...todos,
      {
        id: newId,
        text: todo,
        completed: false
      }
    ]

    setTodos(newTodo)
    setTodo('')
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTodo = event.target.value

    setTodo(newTodo)
  }

  function handleClean() {
    const newTodos = todos.filter(todo => !todo.completed)

    setTodos(newTodos)
  }

  return (
    <div>
      <h1>
        Todo <span style={{ color: '#3139fe' }}>ts</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          style={{ marginInlineEnd: 8 }}
          type="text"
          value={todo}
          onChange={handleChange}
        />
        <button type="submit">add</button>
      </form>
      <Todos todos={todos} onCompleted={handleCompleted} onRemoveTodo={handleRemove} />
      <button onClick={handleClean}>clean completed</button>
    </div>
  )
}
