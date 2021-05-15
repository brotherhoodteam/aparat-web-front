import { createSlice } from '@reduxjs/toolkit'
import { AppErrorActionPayloadType, AppStateType } from './interface'
const initialState: AppStateType = {
	error: null,
	loading: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppErrorAcion: (state, action: AppErrorActionPayloadType) => {
			state.error = action.payload.error
		},
		cleanAppErrorAction: state => {
			state.error = null
		}
	}
})

export const { setAppErrorAcion, cleanAppErrorAction } = appSlice.actions
export default appSlice.reducer
