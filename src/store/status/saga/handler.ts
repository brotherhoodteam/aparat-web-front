import { put } from '@redux-saga/core/effects'
import { StatusPayload } from '../interface'
import { setStatusAction } from '../slice'

export function* statusHandler({ payload }: StatusPayload) {
	// yield put(setStatusAction(payload))
}
