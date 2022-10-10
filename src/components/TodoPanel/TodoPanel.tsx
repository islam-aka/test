import React, { FC, useState } from 'react'
import { Button } from '../UI/Button'
import styles from './TodoPanel.module.css'

const DEFAULT_TODO = {
	name: '',
	description: '',
}

interface TodoPanelProps {
	addTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void
}

export const TodoPanel: FC<TodoPanelProps> = ({ addTodo }) => {
	const [todo, setTodo] = useState(DEFAULT_TODO)

	const onChenge = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		setTodo({ ...todo, [name]: value })
	}

	const onClick = () => {
		if (todo.name !== '' && todo.description !== '') {
			addTodo({ name: todo.name, description: todo.description })
			setTodo(DEFAULT_TODO)
		} else {
			alert('name or description not filled in')
		}
	}

	return (
		<div className={styles.todo__panel__container}>
			<div className={styles.fields__container}>
				<div className={styles.field__container}>
					<label htmlFor='name'>
						<div>name</div>
						<input
							type='text'
							id='name'
							value={todo.name}
							name='name'
							onChange={onChenge}
						/>
					</label>
				</div>
				<div className={styles.field__container}>
					<label htmlFor='description'>
						<div>description</div>
						<input
							type='text'
							id='description'
							value={todo.description}
							name='description'
							onChange={onChenge}
						/>
					</label>
				</div>
			</div>
			<div className={styles.button__container}>
				<Button color='blue' onClick={onClick}>
					ADD
				</Button>
			</div>
		</div>
	)
}
