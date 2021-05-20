import { takeLatest } from '@redux-saga/core/effects'
import { openAppDrawer } from '../slice'
import { openAppDrawerhandler } from './handlers'

export function* openAppDrawerWatcher() {
	yield takeLatest(openAppDrawer, openAppDrawerhandler)
}
