import { put } from '@redux-saga/core/effects'
import { StatusPayloadType } from '../interface'
import { setStatusAction } from '../slice'

export function* statusHandler({ payload }: StatusPayloadType) {
	// yield put(setStatusAction(payload))
}
