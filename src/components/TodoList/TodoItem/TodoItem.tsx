import React, { FC } from 'react'
import { Button } from '../../UI/Button'
import styles from './TodoItem.module.css'

interface TodoItemProps {
	todo: Todo
	checkTood: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	selectTodoIdForEdit: (id: Todo['id']) => void
}

export const TodoItem: FC<TodoItemProps> = ({
	todo,
	checkTood,
	deleteTodo,
	selectTodoIdForEdit,
}) => {
	return (
		<div className={styles.todo__item__container}>
			<div>
				<div
					aria-hidden
					style={{
						opacity: todo.checked ? 0.5 : 1,
						textDecoration: todo.checked ? 'line-through' : 'none',
					}}
					onClick={() => checkTood(todo.id)}
					className={styles.todo__item__title}
				>
					{todo.name}
				</div>

				<div aria-hidden className={styles.todo__item__description}>
					{todo.description}
				</div>
			</div>
			<div className={styles.todo__item__button__container}>
				<Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>
					EDIT
				</Button>
				<Button color='red' onClick={() => deleteTodo(todo.id)}>
					DELETE
				</Button>
			</div>
		</div>
	)
}
