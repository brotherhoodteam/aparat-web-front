import React from 'react'
import { FormattedMessage } from 'react-intl'
import useIntl from './hooks/useIntl'

const App: React.FC = () => {
	const { locale, changeLocale } = useIntl()
	return (
		<div>
			<div>Current Locale : {locale}</div>
			<div>
				<FormattedMessage id="hello" />
			</div>
			<div>
				<button onClick={() => changeLocale('en')}>Switch to en</button>
				<button onClick={() => changeLocale('fa')}>Switch to ir</button>
			</div>
		</div>
	)
}

export default App
