import classNames from 'classnames'

interface UseClassProps {
	defaultClass?: string
	optionalClass?: any
	appendClassName?: string
}

const useClassName = ({
	defaultClass,
	optionalClass,
	appendClassName
}: UseClassProps) => {
	const claculateClass = classNames(optionalClass)

	return `${defaultClass ? defaultClass : ''} ${optionalClass ? claculateClass : ''} ${
		appendClassName ? appendClassName : ''
	}`
}

export default useClassName
