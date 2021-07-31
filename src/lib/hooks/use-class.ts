import classNames from 'classnames'

interface UseClassProps {
	defaultClass?: string
	optionalClass?: any
	otherClass?: string
}

const useClass = ({ defaultClass, optionalClass, otherClass }: UseClassProps) => {
	const claculateClass = classNames(optionalClass)

	return `${defaultClass ? defaultClass : ''} ${optionalClass ? claculateClass : ''} ${
		otherClass ? otherClass : ''
	}`
}

export default useClass
