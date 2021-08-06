import React from 'react'
import { ErrorMessage, useField } from 'formik'
import useClassName from 'lib/hooks/use-class'
import { ClassName, Size } from 'lib/types/component'

import './styles.scss'

interface InputProps {
	id?: string
	name: string
	type?: 'text' | 'email' | 'password'
	label?: string
	size?: Size
	className?: ClassName
	placeholder?: string
}

const Input: React.FC<InputProps> = React.memo(props => {
	const { name, id, label, type, placeholder, className, size } = props
	const [field, meta] = useField(name)
	const options = {
		id: id ? id : `${name}-id`,
		type: type ? type : 'text',
		className: 'form-control',
		size: `form-control-${size}`,
		error: {
			className: 'is-invalid'
		}
	}

	// calc classNames
	const styles = useClassName({
		defaultClass: options.className,
		optionalClass: {
			[options.size]: size,
			[options.error.className]: meta.error && meta.touched
		},
		appendClassName: className
	})

	return (
		<div className="form-group text-right">
			{/* START LABEL */}
			{label && (
				<label htmlFor={options.id} className="input-label">
					{label}
				</label>
			)}
			{/* END LABEL */}

			{/* START INPUT FIELD */}
			<input
				type={options.type}
				className={styles}
				placeholder={placeholder}
				autoComplete="off"
				{...field}
			/>
			{/* END INPUT FIELD */}

			{/* START ERROR MESSAGE */}
			<div className="form-error">
				<ErrorMessage name={name} className="form-error-message" component="div" />
			</div>
			{/* END ERROR MESSAGE */}
		</div>
	)
})

export default Input
