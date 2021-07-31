import { useSelector } from 'react-redux'
import { selectIntlLocale } from 'store/intl/selectors'
import { selectLocale } from 'store/intl/slice'
import useTypedDispatch from '../../lib/hooks/use-typed-dispatch'
import { Locale } from 'store/intl/interface'

const useIntl = () => {
	const locale = useSelector(selectIntlLocale)
	const dispatch = useTypedDispatch()

	const changeLocale = (locale: Locale): void => {
		dispatch(selectLocale({ locale }))
	}
	return { locale, changeLocale }
}

export default useIntl
