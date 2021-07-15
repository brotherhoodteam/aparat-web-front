import { call, put } from '@redux-saga/core/effects'
import api from 'config/api'
import { appErrorHandler } from 'store/app/saga/handlers'
import { setStatusAction } from 'store/status/slice'
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
		yield call(appErrorHandler, error, getTagsFailedAction, true)
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
		yield call(appErrorHandler, error, setTagFailedAction, true)
	}
}
