import React, { useRef, useState } from 'react'
import Tooltip from 'app/components/tooltip'
import Button from 'app/elements/button'

interface CopyInputProps {
	name: string
	label?: string
	value: string
	orginalText: string
	successText: string
}

const CopyText: React.FC<CopyInputProps> = React.memo(props => {
	const { value, label, name, orginalText, successText } = props
	const inputRef = useRef<HTMLInputElement>(null)
	const options = {
		id: `${name}-id`
	}
	const [state, setState] = useState({
		isCopy: false,
		isTootip: false,
		defaultClass: 'tio-copy',
		successClass: 'tio-done'
	})

	const copyInputValue = (callback?: () => void) => {
		if (inputRef.current) {
			inputRef.current.select()
			document.execCommand('copy')

			callback && callback()
		}
	}

	const handleCopyText = () => {
		copyInputValue(() => {
			setState(cur => ({
				...cur,
				isCopy: true
			}))
		})
	}

	const hideTooltip = () => {
		setState(cur => ({
			...cur,
			isCopy: false,
			isTootip: false
		}))
	}

	const showTooltip = () => {
		setState(cur => ({
			...cur,
			isTootip: true
		}))
	}

	return (
		<div className="form-group text-right">
			{/* START LABEL */}
			{label && (
				<label htmlFor={options.id} className="input-label">
					{label}
				</label>
			)}
			{/* END LABEL */}

			{/* START INPUT GROUP */}
			<div className="input-group">
				<div
					className="input-group-prepend"
					onClick={handleCopyText}
					onMouseEnter={showTooltip}
					onMouseLeave={hideTooltip}
				>
					<Button color="white">
						<Tooltip
							show={state.isTootip}
							text={!state.isCopy ? orginalText : successText}
						/>
						<span
							className={!state.isCopy ? state.defaultClass : state.successClass}
						></span>
					</Button>
				</div>
				<input
					ref={inputRef}
					type="text"
					className="form-control"
					value={value}
					autoComplete="off"
					readOnly
				/>
			</div>
			{/* END INPUT GROUP */}
		</div>
	)
})

CopyText.defaultProps = {
	orginalText: 'Copy to clipboard',
	successText: 'Copied!'
}

export default CopyText
