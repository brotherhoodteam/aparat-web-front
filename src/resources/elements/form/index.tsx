import React, { useCallback } from 'react'
import { Field } from 'formik'
import { nanoid } from 'nanoid'
import Select, { ActionMeta, GroupTypeBase, OptionTypeBase } from 'react-select'

import useClass from '../../../hooks/use-class'

import { ClassName, Size } from '../../../interface/component'

import './styles.scss'

interface InputProps {
	id?: string
	name: string
	type?: 'text' | 'email'
	value: string
	label: string
	size?: Size
	className?: ClassName
	placeholder?: string
	onChange: (e: React.ChangeEvent<any>) => void
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
	value: string
	label?: string
	placeholder?: string
	isSearchable?: boolean
	className?: ClassName
	onChange: (name: string, value: OptionTypeBase | null) => void
}

const Input: React.FC<InputProps> = React.memo(
	({ name, id, label, type, placeholder, className, size, onChange }) => {
		const htmlId = id ? id : `${name}-${nanoid()}`
		const inputType = type ? type : 'text'
		const inputSize = `form-control-${size}`
		const styles = useClass({
			defaultClass: 'form-control',
			optionalClass: {
				[inputSize]: size
			},
			otherClass: className
		})

		return (
			<div className="form-group text-right">
				{label && (
					<label htmlFor={htmlId} className="input-label">
						{label}
					</label>
				)}
				<input
					type={inputType}
					name={name}
					id={htmlId}
					className={styles}
					placeholder={placeholder}
					autoComplete="off"
					onChange={onChange}
				/>
			</div>
		)
	}
)

const TextArea: React.FC<TextAreaProps> = React.memo(
	({ name, id, label, placeholder, className, onChange }) => {
		const htmlId = id ? id : `${name}-${nanoid()}`
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
const SelectBox: React.FC<SelectBoxType> = React.memo(
	({
		id,
		name,
		label,
		placeholder,
		isSearchable,
		className,
		options,
		value,
		onChange
	}) => {
		const htmlId = id ? id : `SelectBox-${nanoid()}`
		const baseClass = 'select-box'
		const styles = useClass({
			defaultClass: baseClass,
			otherClass: className
		})

		const handleChange = useCallback(
			(select: OptionTypeBase | null, actionMeta: ActionMeta<OptionTypeBase>) => {
				onChange(name, select?.value)
			},
			[]
		)

		const defaultValue = options?.find(op => op.value === value)
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
					value={defaultValue}
					isSearchable={isSearchable || false}
					onChange={handleChange}
				/>
			</div>
		)
	}
)
export { Input, TextArea, SelectBox }
