import React from 'react'
import { Field } from 'formik'
import { nanoid } from 'nanoid'

import Select, { components, GroupTypeBase, OptionTypeBase } from 'react-select'
import useClass from '../../../hooks/use-class'
import { ClassName } from '../../../interface/component'

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
interface SelectBoxType {
	options: readonly (OptionTypeBase | GroupTypeBase<OptionTypeBase>)[] | undefined
	id: string
	name: string
	label?: string
	placeholder?: string
	isSearchable?: boolean
	className?: ClassName
}

// const Option = props => {
// 	return <components.Option {...props} />
// }
const SelectBox: React.FC<SelectBoxType> = React.memo(
	({ id, name, label, placeholder, isSearchable, className, options }) => {
		const htmlId = id ? id : `SelectBox-${nanoid()}`

		const baseClass = 'select-box'
		const styles = useClass({
			defaultClass: baseClass,
			otherClass: className
		})

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
					options={options}
					className={styles}
					classNamePrefix={'select-box'}
					isSearchable={isSearchable || false}
					placeholder={placeholder || ''}
				/>
			</div>
		)
	}
)
export { Input, SelectBox }
