import { useSelector } from 'react-redux'
import { selectIntlLocale } from '../store/intl/intl.selector'
import { setLocale } from '../store/intl/intl.slice'
import useTypedDispatch from './useTypeDispatch'
import { LocaleType } from '../store/intl/intl.interface'

const useIntl = () => {
	const locale = useSelector(selectIntlLocale)
	const dispatch = useTypedDispatch()

	const changeLocale = (locale: LocaleType): void => {
		dispatch(setLocale(locale))
	}
	return { locale, changeLocale }
}

export default useIntl
