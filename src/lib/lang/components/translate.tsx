import { FormattedMessage } from 'react-intl'

const translate = (id: number, value: any) => (
	<FormattedMessage id={id} values={{ ...value }} />
)

export default translate
