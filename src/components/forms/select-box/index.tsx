import { ErrorMessage, useField } from 'formik'
import useClassName from 'lib/hooks/use-class'
import { ClassName } from 'lib/types/component'
import React, { useCallback } from 'react'
import Select, {
	ActionMeta,
	components,
	GroupTypeBase,
	OptionTypeBase
} from 'react-select'

interface SelectBoxProps {
	id: string
	name: string
	label?: string
	placeholder?: string
	className?: ClassName
	options: readonly (OptionTypeBase | GroupTypeBase<OptionTypeBase>)[] | undefined
	isSearchable?: boolean
	closeMenuOnSelect?: boolean
	isMulti?: boolean
	isClearable?: boolean
	isLoading?: boolean
	loadingMessage?: string
}

const NoOptionsMessage = (props: any, other: any) => {
	return (
		<components.NoOptionsMessage {...props}>
			<span className="custom-css-class">موردی یافت نشد</span>
		</components.NoOptionsMessage>
	)
}

const SelectBox: React.FC<SelectBoxProps> = React.memo(props => {
	const {
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
	} = props
	const [field, meta, helper] = useField(name)
	const optionsComponent = {
		className: 'select-box',
		id: id ? id : `${name}-id`,
		error: {
			className: 'is-invalid'
		}
	}

	const styles = useClassName({
		defaultClass: optionsComponent.className,
		optionalClass: {
			[optionsComponent.error.className]: meta.touched && meta.error
		},
		appendClassName: className
	})
	const handleLoading = () => (loadingMessage ? loadingMessage : null)

	const handleChange = useCallback(
		(select: OptionTypeBase | null, actionMeta: ActionMeta<OptionTypeBase>) => {
			helper.setValue(select)
		},
		[]
	)

	return (
		<div className="form-group text-right">
			{/* START LABEL */}
			{label && (
				<label htmlFor={optionsComponent.id} className="input-label">
					{label}
				</label>
			)}
			{/* END LABEL */}

			<Select
				id={optionsComponent.id}
				className={styles}
				classNamePrefix={'select-box'}
				defaultValue={field.value}
				placeholder={placeholder || ''}
				options={options}
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
})
export default SelectBox
