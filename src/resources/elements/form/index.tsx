import React, { useCallback, useMemo, useRef } from 'react'
import { ErrorMessage, useField } from 'formik'
import Select, {
	ActionMeta,
	components,
	GroupTypeBase,
	OptionTypeBase
} from 'react-select'

import useClass from '../../../hooks/use-class'
import { ClassName, Size } from '../../../interface/component'

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

interface SelectBoxType {
	id: string
	name: string
	label?: string
	placeholder?: string
	className?: ClassName
	// defaultValue?:
	// 	| { label: string; value: number }
	// 	| Array<{ label: string; value: number }>
	options: readonly (OptionTypeBase | GroupTypeBase<OptionTypeBase>)[] | undefined
	isSearchable?: boolean
	closeMenuOnSelect?: boolean
	isMulti?: boolean
	isClearable?: boolean
	isLoading?: boolean
	loadingMessage?: string
}
interface TextAreaProps {
	id?: string
	name: string
	label: string
	placeholder?: string
	className?: ClassName
}

const Input: React.FC<InputProps> = React.memo(
	({ name, id, label, type, placeholder, className, size }) => {
		// input settings
		const [field, meta] = useField(name)
		// create default id
		const htmlId = useMemo(() => (id ? id : `${name}-id`), [])
		// create default type
		const inputType = useMemo(() => (type ? type : 'text'), [])
		// create default size
		const inputSize = useMemo(() => `form-control-${size}`, [])
		// calc classNames
		const styles = useClass({
			defaultClass: 'form-control',
			optionalClass: {
				[inputSize]: size,
				'is-invalid': meta.error && meta.touched
			},
			otherClass: className
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
	}
)

const TextArea: React.FC<TextAreaProps> = React.memo(
	({ name, id, label, placeholder, className }) => {
		// setting textarea
		const [field, meta] = useField(name)
		// create default id
		const htmlId = id ? id : `${name}-id`
		// calc classnames
		const styles = useClass({
			defaultClass: 'form-control',
			optionalClass: {
				'is-invalid': meta.error && meta.touched
			},
			otherClass: className
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
					className={styles}
					{...field}
				></textarea>
				<div className="form-error">
					<ErrorMessage name={name} className="form-error-message" component="div" />
				</div>
			</div>
		)
	}
)

const NoOptionsMessage = (props: any, other: any) => {
	return (
		<components.NoOptionsMessage {...props}>
			<span className="custom-css-class">موردی یافت نشد</span>
		</components.NoOptionsMessage>
	)
}

const SelectBox: React.FC<SelectBoxType> = React.memo(
	({
		id,
		name,
		label,
		placeholder,
		isSearchable,
		className,
		options,
		closeMenuOnSelect,
		isMulti,
		isClearable,
		isLoading,
		loadingMessage
	}) => {
		const [field, meta, helper] = useField(name)
		const htmlId = id ? id : `${name}-id`
		const baseClass = 'select-box'
		const styles = useClass({
			defaultClass: baseClass,
			optionalClass: {
				'is-invalid': meta.touched && meta.error
			},
			otherClass: className
		})
		const handleChange = useCallback(
			(select: OptionTypeBase | null, actionMeta: ActionMeta<OptionTypeBase>) => {
				console.log('[select]', select)
				helper.setValue(select)
			},
			[]
		)

		const defaultValues = useMemo(() => {
			const fieldVal = field.value
			let defaultValue: any

			if (!fieldVal) return

			if (!(fieldVal instanceof Array)) {
				defaultValue = isMulti ? [fieldVal] : fieldVal
			} else {
				defaultValue = isMulti ? fieldVal : fieldVal[0]
			}

			return isMulti
				? options?.filter(op => {
						return defaultValue.some((item: OptionTypeBase) => {
							return item.id === op.value
						})
				  })
				: options?.find(op => {
						return op.id === defaultValue.value
				  })
		}, [options])

		const handleLoading = () => (loadingMessage ? loadingMessage : null)
		return (
			<div className="form-group text-right">
				{/* START LABEL */}
				{label && (
					<label htmlFor={htmlId} className="input-label">
						{label}
					</label>
				)}
				{/* END LABEL */}

				<Select
					id={htmlId}
					className={styles}
					classNamePrefix={'select-box'}
					placeholder={placeholder || ''}
					options={options}
					defaultValue={defaultValues}
					isSearchable={isSearchable || false}
					isMulti={isMulti}
					closeMenuOnSelect={closeMenuOnSelect}
					isClearable={isClearable || false}
					components={{ NoOptionsMessage }}
					isLoading={isLoading}
					loadingMessage={handleLoading}
					onBlur={() => {
						helper.setTouched(true)
					}}
					onChange={handleChange}
				/>
				<div className="form-error">
					<ErrorMessage name={name} className="form-error-message" component="div" />
				</div>
			</div>
		)
	}
)
interface SwitchProps {
	name: string
	id?: string
	className?: string
}
const Switch: React.FC<SwitchProps> = ({ name, className }) => {
	const [field, meta, helper] = useField(name)
	const ref = useRef<HTMLInputElement>(null)
	const styles = useClass({
		defaultClass: 'toggle-switch',
		optionalClass: {
			'is-invalid': meta.error && meta.touched
		},
		otherClass: className
	})

	const handleChange = () => {
		helper.setValue(!field.value)
	}

	const onToggle = () => {
		ref?.current?.click()
	}

	return (
		<>
			<div className={styles}>
				<input
					ref={ref}
					type="checkbox"
					id={name}
					name={name}
					className="toggle-switch-input"
					defaultChecked={field.value}
					onChange={handleChange}
				/>
				<div className="toggle-switch-label" onClick={onToggle}>
					<div className="toggle-switch-indicator"></div>
				</div>
			</div>
		</>
	)
}
export { Input, TextArea, SelectBox, Switch }
