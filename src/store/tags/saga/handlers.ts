import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { TagsDataResponseType } from '../interface'
import { getTagsSuccessAction, getTagsFailedAction } from '../slice'

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
