import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import store from './store'
import IntlContainer from './config/react-intl/react-intl.container'
import './assets/styles/_main.scss'

const Main: React.FC = () => (
	<Provider store={store}>
		<IntlContainer>
			<App />
		</IntlContainer>
	</Provider>
)
ReactDOM.render(<Main />, document.getElementById('root'))
