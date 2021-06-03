import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { setStatusAction } from '../../status/slice'
import {
	SetTagStartActionPayloadType,
	TagsDataResponseType,
	TagDataResponseType
} from '../interface'
import {
	getTagsSuccessAction,
	getTagsFailedAction,
	setTagFailedAction,
	setTagSuccessAction
} from '../slice'

export function* getTagsHandler() {
	try {
		const { data }: TagsDataResponseType = yield call(api.tags.get)
		yield put(getTagsSuccessAction({ tagsData: data }))
	} catch (error) {
		yield put(
			getTagsFailedAction({
				error: { message: error.message, status: error.status }
			})
		)
	}
}

export function* setTagHandler({ payload }: SetTagStartActionPayloadType) {
	try {
		const response: TagDataResponseType = yield call(api.tags.set, {
			title: payload.data.title
		})
		yield put(setTagSuccessAction({ data: response.data }))
		yield put(
			setStatusAction({ status: 'success', message: 'برچسب جدید با موفقیت اضافه شد' })
		)
	} catch (err) {
		yield put(setTagFailedAction({ error: { message: err.message, status: err.status } }))
		yield put(setStatusAction({ status: 'error', message: err.message }))
	}
}
