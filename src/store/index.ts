import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './root.reducer'
import rootSaga from './root.saga'

const saga = createSagaMiddleware()
const middleware = [logger, saga]

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware],
	devTools: process.env.NODE_ENV === 'development'
})

saga.run(rootSaga)

export default store
