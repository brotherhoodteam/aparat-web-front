import React, { Fragment } from 'react'
import flatten from 'flat'
import { IntlProvider } from 'react-intl'
import messages from '../../lang'
import useIntl from '../../hooks/useIntl'

const IntlContainer: React.FC = ({ children }) => {
	const { locale } = useIntl()
	return (
		<IntlProvider
			textComponent={Fragment}
			locale={locale}
			messages={flatten(messages[locale])}
		>
			{children}
		</IntlProvider>
	)
}

export default IntlContainer
