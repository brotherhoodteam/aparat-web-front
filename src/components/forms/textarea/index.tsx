import { ErrorMessage, useField } from 'formik'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import React from 'react'

interface TextareaProps extends BaseComponent<HTMLTextAreaElement> {
	id?: string
	name: string
	label: string
	placeholder?: string
}

const Textarea: React.FC<TextareaProps> = React.memo(props => {
	const { name, id, label, placeholder, children, className, ...attr } = props
	const [field, meta] = useField(name)
	const options = {
		className: 'form-control',
		id: id ? id : `${name}-id`,
		error: {
			className: 'is-invalid'
		}
	}

	const computedClassName = useClassName({
		defaultClass: options.className,
		optionalClass: {
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

			<textarea
				rows={4}
				id={options.id}
				placeholder={placeholder}
				className={computedClassName}
				{...field}
				{...attr}
			></textarea>
			<div className="form-error">
				<ErrorMessage name={name} className="form-error-message" component="div" />
			</div>
		</div>
	)
})

export default Textarea
