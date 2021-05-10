import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import appReducer from './reducer'
import appSaga from './saga'

const saga = createSagaMiddleware()

const middleware: any = [saga]

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

const store = configureStore({
	reducer: appReducer,
	middleware: [...getDefaultMiddleware({ thunk: false, logger: false }), ...middleware],
	devTools: process.env.NODE_ENV === 'development'
})

saga.run(appSaga)

export default store
