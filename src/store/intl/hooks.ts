import useTypedDispatch from 'lib/hooks/use-typed-dispatch'
import { Locale } from 'lib/types/locale'
import { useSelector } from 'react-redux'
import { selectIntlLocale } from './selectors'
import { selectLocale } from './slice'

// HOOKS
export const useIntl = () => {
	const locale = useSelector(selectIntlLocale)
	const dispatch = useTypedDispatch()

	const changeLocale = (locale: Locale): void => {
		dispatch(selectLocale({ locale }))
	}
	return { locale, changeLocale }
}
