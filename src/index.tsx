import ReactDOM from 'react-dom'
import App from 'app'
import IntlContainer from 'lib/lang/components/container'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import Fallback from 'core/router/fallback'
import store from 'core/redux'
import { BrowserRouter } from 'react-router-dom'
import 'static/styles/_main.scss'

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
