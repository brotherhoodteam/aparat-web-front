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

	// setting textarea
	const [field, meta] = useField(name)
	// create default id
	const htmlId = id ? id : `${name}-id`
	// calc classnames
	const computedClassName = useClassName({
		defaultClass: 'form-control',
		optionalClass: {
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

			<textarea
				rows={4}
				id={htmlId}
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
