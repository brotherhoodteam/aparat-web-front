import { useSelector } from 'react-redux'
import { selectIntlLocale } from '../store/intl/selectors'
import { setLocaleAction } from '../store/intl/slice'
import useTypedDispatch from './use-typed-dispatch'
import { LocaleType } from '../store/intl/interface'

const useIntl = () => {
	const locale = useSelector(selectIntlLocale)
	const dispatch = useTypedDispatch()

	const changeLocale = (locale: LocaleType): void => {
		dispatch(setLocaleAction({ locale }))
	}
	return { locale, changeLocale }
}

export default useIntl
