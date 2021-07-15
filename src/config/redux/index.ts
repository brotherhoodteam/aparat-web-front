import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducer'
import rooSaga from './saga'

const saga = createSagaMiddleware()

const middleware: any = [saga]

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware({ thunk: false, logger: false }), ...middleware],
	devTools: process.env.NODE_ENV === 'development'
})

saga.run(rooSaga)

export default store
