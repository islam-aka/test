import React, { FC } from 'react'
import { TodoItem } from './TodoItem/TodoItem'

interface TodoListProps {
	todos: Todo[]
	checkTood: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	todoIdForEdit: (id: Todo['id'])
	selectTodoIdForEdit: (id: Todo['id']) => void
}

export const TodoList: FC<TodoListProps> = ({
	todos,
	checkTood,
	deleteTodo,
	selectTodoIdForEdit,
}) => {
	return (
		<div>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					checkTood={checkTood}
					deleteTodo={deleteTodo}
					selectTodoIdForEdit={selectTodoIdForEdit}
				/>
			))}
		</div>
	)
}
