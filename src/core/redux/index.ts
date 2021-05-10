import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import appReducer from './reducer'
import appSaga from './saga'

const saga = createSagaMiddleware()
const middleware = [logger, saga]

const store = configureStore({
	reducer: appReducer,
	middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
	devTools: process.env.NODE_ENV === 'development'
})

saga.run(appSaga)

export default store
