import { ChangeEvent, FocusEvent, useState } from 'react'
import useClassName from 'lib/hooks/use-class'
import './styles.scss'
import { BaseComponent } from 'lib/types/component'

interface SreachProps extends BaseComponent<HTMLDivElement> {}

const Search: React.FC<SreachProps> = props => {
	const { className, children, ...attr } = props

	const [isActive, setIsActive] = useState(false)

	const [input, setInput] = useState('')
	const computedClassName = useClassName({
		defaultClass: 'search-input',
		optionalClass: {
			['focus']: isActive
		}
	})
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}
	const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
		setIsActive(true)
	}
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		if (input.length !== 0) return
		setIsActive(false)
	}

	const clearTextInput = () => {
		setInput('')
		setIsActive(false)
	}
	return (
		<form>
			<div className="search" {...attr}>
				<div className="search-prepend">
					{isActive && <i onClick={clearTextInput} className="tio-clear"></i>}
				</div>
				<input
					className={computedClassName}
					name="search"
					type="text"
					placeholder="جستوجو در آپارات"
					autoComplete="off"
					onChange={handleChange}
					value={input}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<div className="search-append">
					<i className="tio-search"></i>
				</div>
			</div>
		</form>
	)
}

export default Search
