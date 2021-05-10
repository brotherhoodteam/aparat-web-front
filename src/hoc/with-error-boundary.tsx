import React from 'react'
import ErrorBoundary from '../config/exceptions/error-boundary'

function withErrorHandler(
	WrappedComponent: React.FC,
	componentName = WrappedComponent.displayName ?? WrappedComponent.name
) {
	const WithErrorHandler: React.FC = props => {
		return (
			<ErrorBoundary>
				<WrappedComponent {...props} />
			</ErrorBoundary>
		)
	}

	WithErrorHandler.displayName = `withSampleHoC(${componentName})`

	return WithErrorHandler
}

export default withErrorHandler
