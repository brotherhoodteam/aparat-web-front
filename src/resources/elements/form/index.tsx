import React, { useCallback, useMemo } from 'react'
import { nanoid } from 'nanoid'
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

const Input: React.FC<InputProps> = ({
	name,
	id,
	label,
	type,
	placeholder,
	className,
	size,
	value,
	onChange
}) => {
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
				value={value}
				autoComplete="off"
				onChange={onChange}
			/>
		</div>
	)
}

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
		const htmlId = id ? id : `SelectBox-${nanoid()}`
		const baseClass = 'select-box'
		const styles = useClass({
			defaultClass: baseClass,
			otherClass: className
		})

		const handleChange = useCallback(
			(select: OptionTypeBase | null, actionMeta: ActionMeta<OptionTypeBase>) => {
				// if (isMulti) {
				// 	const items = select?.map((tag: any) => tag.value)
				// 	onChange(name, items)
				// 	return
				// }
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
							console.log(
								'op.value === selectDefaultValue?.value',
								op.value,
								defaultValue?.[0].value
							)
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
export { Input, TextArea, SelectBox }
