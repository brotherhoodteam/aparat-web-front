import { Component, ErrorInfo, ReactNode } from 'react'
import ErrorComponent from './error'

interface Props {
	children: ReactNode
}
interface State {
	hasError: boolean
}
class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	}

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo)
	}
	render() {
		if (this.state.hasError) {
			return (
				<ErrorComponent>
					<h1>Ooops happend Error</h1>
				</ErrorComponent>
			)
		}
		return this.props.children
	}
}

export default ErrorBoundary
