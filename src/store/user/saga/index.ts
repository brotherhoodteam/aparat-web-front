import { all, call } from 'redux-saga/effects'
import usersWatchers from './watchers'

export default function* usersSaga() {
	yield all([call(usersWatchers)])
}
