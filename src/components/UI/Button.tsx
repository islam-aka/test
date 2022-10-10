import React, { FC } from 'react'
import styles from './UI.module.css'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	color: 'orange' | 'blue' | 'red'
}

export const Button: FC<ButtonProps> = ({
	children,
	color,
	onClick,
	...props
}) => {
	const className = `${styles.button} ${styles[`button__${color}`]}`
	return (
		<button className={className} onClick={onClick} {...props}>
			{children}
		</button>
	)
}
