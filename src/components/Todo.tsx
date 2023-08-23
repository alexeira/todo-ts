import { Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void
  onCompleted: (id: number, completed: boolean) => void
}

export const Todo: React.FC<Props> = ({ id, text, completed, onRemoveTodo, onCompleted }) => {
  return (
    <div>
      <input
        checked={completed}
        type="checkbox"
        onChange={() => {
          onCompleted(id, completed)
        }}
      />
      <label>{text}</label>
      <button onClick={() => onRemoveTodo(id)}>X</button>
    </div>
  )
}
