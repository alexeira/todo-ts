import { useState } from 'react'

import { Todos } from './components/Todos'

const mockTodos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Buy eggs', completed: false },
  { id: 3, text: 'Buy bread', completed: false }
]

export default function App() {
  const [todos, setTodos] = useState(mockTodos)

  function handleRemove(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  function handleAdd(text: string) {}

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

  return (
    <div>
      <h1>
        Todo <span style={{ color: '#3139fe' }}>ts</span>
      </h1>
      <Todos todos={todos} onCompleted={handleCompleted} onRemoveTodo={handleRemove} />
    </div>
  )
}
