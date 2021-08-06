import { useField } from 'formik'
import useClassName from 'lib/hooks/use-class'
import { useRef } from 'react'

interface SwitchProps {
	name: string
	id?: string
	className?: string
}
const Switch: React.FC<SwitchProps> = ({ name, className }) => {
	const [field, meta, helper] = useField(name)
	const ref = useRef<HTMLInputElement>(null)
	const styles = useClassName({
		defaultClass: 'toggle-switch',
		optionalClass: {
			'is-invalid': meta.error && meta.touched
		},
		appendClassName: className
	})

	const handleChange = () => {
		helper.setValue(!field.value)
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
				defaultChecked={field.value}
				onChange={handleChange}
			/>
			<div className="toggle-switch-label" onClick={onToggle}>
				<div className="toggle-switch-indicator"></div>
			</div>
		</div>
	)
}

export default Switch
