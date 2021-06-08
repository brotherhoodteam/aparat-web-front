import classNames from 'classnames'
import { useCallback } from 'react'

interface UseClassProps {
	defaultClass?: string
	optionalClass?: any
	otherClass?: string
}

const useClass = ({ defaultClass, optionalClass, otherClass }: UseClassProps) => {
	return () => {
		const claculateClass = classNames(optionalClass)

		return `${defaultClass ? defaultClass : ''} ${optionalClass ? claculateClass : ''} ${
			otherClass ? otherClass : ''
		}`
	}
}

export default useClass
