import ReactDOM from 'react-dom'
import App from 'app'
import IntlContainer from 'core/lang/components/container'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import Fallback from 'config/router/fallback'
import store from 'config/redux'
import { BrowserRouter } from 'react-router-dom'
import 'assets/styles/_main.scss'

const Root: React.FC = () => (
	<BrowserRouter>
		<Suspense fallback={<Fallback />}>
			<Provider store={store}>
				<IntlContainer>
					<App />
				</IntlContainer>
			</Provider>
		</Suspense>
	</BrowserRouter>
)
ReactDOM.render(<Root />, document.getElementById('root'))
