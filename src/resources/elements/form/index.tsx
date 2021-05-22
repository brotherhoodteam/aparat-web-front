import { Field } from 'formik'
import { nanoid } from 'nanoid'
import React from 'react'

import './styles.scss'
interface FieldProps {
	name: string
	type?: 'text' | 'email'
	label: string
	id?: string
}
interface InputPorps extends FieldProps {
	placeholder?: string
}

const Input: React.FC<InputPorps> = React.memo(
	({ name, id, label, type, placeholder, ...props }) => {
		const htmlId = id ? id : `name-${nanoid()}`
		const inputType = type ? type : 'text'
		return (
			<Field name={name} {...props}>
				{({ field, form, meta }: any) => {
					return (
						<div className="form-group text-right">
							{label && (
								<label htmlFor={htmlId} className="input-label">
									{label}
								</label>
							)}
							<input
								type={inputType}
								id={htmlId}
								className="form-control form-control-lg"
								placeholder={placeholder}
								{...field}
							/>
						</div>
					)
				}}
			</Field>
		)
	}
)
export { Input }
