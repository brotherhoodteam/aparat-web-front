import React, { memo, useCallback, useMemo, useRef } from 'react'
import { useField } from 'formik'
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
	type?: 'text' | 'email'
	value?: string
	label?: string
	size?: Size
	className?: ClassName
	placeholder?: string
	onChange?: (e: React.ChangeEvent<any>) => void
}
interface TextAreaProps {
	id?: string
	name: string
	value: string
	label: string
	className?: ClassName
	placeholder?: string
	onChange: (e: React.ChangeEvent<any>) => void
}
interface SelectBoxType {
	options: readonly (OptionTypeBase | GroupTypeBase<OptionTypeBase>)[] | undefined
	id: string
	name: string
	defaultValue?: Array<{ label: string; value: number }>
	label?: string
	className?: ClassName
	placeholder?: string
	isSearchable?: boolean
	closeMenuOnSelect?: boolean
	isMulti?: boolean
	isClearable?: boolean
	isLoading?: boolean
	loadingMessage?: string
	onChange: (name: string, value: OptionTypeBase | null) => void
}

const Input: React.FC<InputProps> = React.memo(
	({ name, id, label, type, placeholder, className, size, value, onChange }) => {
		const [field, meta] = useField(name)
		// const htmlId = useMemo(() => (id ? id : `${name}-id`), [])
		const inputType = type ? type : 'text'
		const inputSize = `form-control-${size}`
		const styles = useCallback(() => {
			return getStyles()
		}, [])

		const getStyles = useClass({
			defaultClass: 'form-control',
			optionalClass: {
				[inputSize]: size
			},
			otherClass: className
		})
		console.log('render', meta)
		return (
			<div className="form-group text-right">
				{/* {label && (
					<label htmlFor={htmlId} className="input-label">
						{label}
					</label>
				)} */}
				<input
					type={inputType}
					autoComplete="off"
					className={styles}
					placeholder={placeholder}
					{...field}
				/>
			</div>
		)
	}
)

const TextArea: React.FC<TextAreaProps> = React.memo(
	({ name, id, label, placeholder, className, onChange }) => {
		const htmlId = id ? id : `${name}-id`
		const styles = useClass({
			defaultClass: 'form-control',
			otherClass: className
		})

		return (
			<div className="form-group text-right">
				{label && (
					<label htmlFor={htmlId} className="input-label">
						{label}
					</label>
				)}
				<textarea
					rows={4}
					name={name}
					id={htmlId}
					placeholder={placeholder}
					className={styles}
					onChange={onChange}
				></textarea>
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
		defaultValue,
		closeMenuOnSelect,
		isMulti,
		isClearable,
		isLoading,
		loadingMessage,
		onChange
	}) => {
		const htmlId = id ? id : `${name}-id`
		const baseClass = 'select-box'
		const styles = useClass({
			defaultClass: baseClass,
			otherClass: className
		})

		const handleChange = useCallback(
			(select: OptionTypeBase | null, actionMeta: ActionMeta<OptionTypeBase>) => {
				onChange(name, select)
			},
			[]
		)

		const defaultValues = useMemo(
			() =>
				isMulti
					? options?.filter(op =>
							defaultValue?.some((item: OptionTypeBase) => {
								return item.value === op.value
							})
					  )
					: options?.find(op => {
							return op.value === defaultValue?.[0].value
					  }),
			[]
		)

		const handleLoading = () => (loadingMessage ? loadingMessage : null)
		return (
			<div className="form-group text-right">
				{label && (
					<label htmlFor={htmlId} className="input-label">
						{label}
					</label>
				)}
				<Select
					id={htmlId}
					name={name}
					className={styles}
					classNamePrefix={'select-box'}
					placeholder={placeholder || ''}
					options={options}
					defaultValue={defaultValues}
					isSearchable={isSearchable || false}
					onChange={handleChange}
					isMulti={isMulti}
					closeMenuOnSelect={closeMenuOnSelect}
					isClearable={isClearable || false}
					components={{ NoOptionsMessage }}
					isLoading={isLoading}
					loadingMessage={handleLoading}
				/>
			</div>
		)
	}
)
interface SwitchProps {
	name: string
	value: boolean
	id?: string
	className?: string
	onChange: (name: string, value: boolean) => void
}
const Switch: React.FC<SwitchProps> = ({ name, value, className, onChange }) => {
	const ref = useRef<HTMLInputElement>(null)
	const styles = useClass({
		defaultClass: 'toggle-switch',
		otherClass: className
	})

	const handleChange = () => {
		onChange(name, !value)
	}

	const onToggle = () => {
		ref?.current?.click()
	}

	return (
		<div className={styles}>
			<input
				ref={ref}
				type="checkbox"
				id={name}
				name={name}
				className="toggle-switch-input"
				defaultChecked={value}
				onChange={handleChange}
			/>
			<div className="toggle-switch-label" onClick={onToggle}>
				<div className="toggle-switch-indicator"></div>
			</div>
		</div>
	)
}
export { Input, TextArea, SelectBox, Switch }
