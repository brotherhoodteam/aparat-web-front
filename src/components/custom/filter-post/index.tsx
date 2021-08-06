import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import Select, { components } from 'react-select'
import './styles.scss'

interface Options {
	label: string
	value: string
}
interface FilterPostProps extends BaseComponent<HTMLDivElement> {
	onChange: (value: any) => void
	options: Array<Options>
}

const NoOptionsMessage = (props: any, other: any) => {
	return (
		<components.NoOptionsMessage {...props}>
			<span className="custom-css-class">موردی یافت نشد</span>
		</components.NoOptionsMessage>
	)
}

const FilterPost: React.FC<FilterPostProps> = props => {
	const { children, className, onChange, options, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'filter',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			<div className="filter-container">
				<div className="filter-item">
					<Select
						id="filter-state"
						classNamePrefix={'filter-select'}
						placeholder="وضعیت"
						options={options}
						defaultValue={options[0]}
						isSearchable={false}
						closeMenuOnSelect={true}
						isClearable={false}
						components={{ NoOptionsMessage }}
						onChange={onChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default FilterPost
