import React, { useMemo } from 'react'
import { ErrorMessage, useField } from 'formik'
import useClassName from 'lib/hooks/use-class'
import { ClassName, Size } from 'lib/types/component'
import Textarea from './textarea'
import SelectBox from './select-box'
import CopyText from './copy-text'
import Switch from './switch'
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
	// input settings
	const [field, meta] = useField(name)
	// create default id
	const htmlId = useMemo(() => (id ? id : `${name}-id`), [])
	// create default type
	const inputType = useMemo(() => (type ? type : 'text'), [])
	// create default size
	const inputSize = useMemo(() => `form-control-${size}`, [])
	// calc classNames
	const styles = useClassName({
		defaultClass: 'form-control',
		optionalClass: {
			[inputSize]: size,
			'is-invalid': meta.error && meta.touched
		},
		appendClassName: className
	})

	return (
		<div className="form-group text-right">
			{/* START LABEL */}
			{label && (
				<label htmlFor={htmlId} className="input-label">
					{label}
				</label>
			)}
			{/* END LABEL */}

			{/* START INPUT FIELD */}
			<input
				type={inputType}
				className={styles}
				placeholder={placeholder}
				{...field}
				autoComplete="off"
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

export { Input, Textarea, SelectBox, Switch, CopyText }
