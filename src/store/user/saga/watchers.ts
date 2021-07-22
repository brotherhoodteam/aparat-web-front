import { takeLatest } from 'redux-saga/effects'
import { fetchUserProfileRequest } from '../slice'
import { fetchUserProfilehandler } from './handlers'

export default function* usersWatchers() {
	yield takeLatest(fetchUserProfileRequest, fetchUserProfilehandler)
}
