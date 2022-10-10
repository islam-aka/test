import React, { FC } from 'react'

import styles from './Header.module.css'

interface HeaderProps {
	todoCount: number
}

export const Header: FC<HeaderProps> = ({ todoCount }) => (
	<div className={styles.header__container}>
		<div className={styles.header__title}>
			Todo list <b>{todoCount}</b> task(s)
		</div>
	</div>
)
