import { type TodosList } from '../types'

import { Todo } from './Todo'

interface Props {
  todos: TodosList
  onRemoveTodo: (id: number) => void
  onCompleted: (id: number, completed: boolean) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo
            key={todo.id}
            completed={todo.completed}
            id={todo.id}
            text={todo.text}
            onCompleted={onCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
