import Select, { components } from 'react-select'
import './styles.scss'

interface Options {
	label: string
	value: string
}
interface Props {
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

const FilterVideos: React.FC<Props> = ({ onChange, options }) => {
	return (
		<div className="filter">
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

export default FilterVideos
