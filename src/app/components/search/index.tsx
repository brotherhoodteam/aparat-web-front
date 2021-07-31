import { ChangeEvent, FocusEvent, useState } from 'react'
import useClass from 'lib/hooks/use-class'
import './styles.scss'

const Search = () => {
	const [isActive, setIsActive] = useState(false)

	const [input, setInput] = useState('')
	const inputStyles = useClass({
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
			<div className="search">
				<div className="search-prepend">
					{isActive && <i onClick={clearTextInput} className="tio-clear"></i>}
				</div>
				<input
					className={inputStyles}
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
