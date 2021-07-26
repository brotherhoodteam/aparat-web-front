import { takeLatest } from 'redux-saga/effects'
import { fetchUserListRequest, fetchUserProfileRequest } from '../slice'
import { fetchUserListhandler, fetchUserProfilehandler } from './handlers'

export default function* usersWatchers() {
	yield takeLatest(fetchUserProfileRequest, fetchUserProfilehandler)
	yield takeLatest(fetchUserListRequest, fetchUserListhandler)
}
