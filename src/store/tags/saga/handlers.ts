import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { getErrorInfo } from '../../../utils'
import { setAppErrorAction } from '../../app/slice'
import { setStatusAction } from '../../status/slice'
import {
	SetTagStartPayloadType,
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
		yield put(getTagsSuccessAction({ tags: data }))
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				getTagsFailedAction({ error: { message: errorMessage, status: statusCode } })
			)
			yield put(setStatusAction({ message: errorMessage, status: 'warn' }))
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	}
}

export function* setTagHandler({ payload: { tag } }: SetTagStartPayloadType) {
	try {
		const { data }: TagDataResponseType = yield call(api.tags.set, tag)
		yield put(setTagSuccessAction({ tag: data }))
		yield put(
			setStatusAction({ status: 'success', message: 'برچسب جدید با موفقیت اضافه شد' })
		)
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				setTagFailedAction({ error: { message: errorMessage, status: statusCode } })
			)
			yield put(setStatusAction({ message: errorMessage, status: 'warn' }))
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	}
}
