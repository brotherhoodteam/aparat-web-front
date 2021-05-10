import { useSelector } from 'react-redux'
import { selectIntlLocale } from '../store/intl/selector'
import { setLocale } from '../store/intl/slice'
import useTypedDispatch from './useTypeDispatch'
import { LocaleType } from '../store/intl/interface'

const useIntl = () => {
	const locale = useSelector(selectIntlLocale)
	const dispatch = useTypedDispatch()

	const changeLocale = (locale: LocaleType): void => {
		dispatch(setLocale(locale))
	}
	return { locale, changeLocale }
}

export default useIntl
