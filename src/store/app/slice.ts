import { createSlice } from '@reduxjs/toolkit'
import { AppErrorPayloadType, AppStateType } from './interface'
const initialState: AppStateType = {
	error: null,
	drawer: false,
	overlay: false,
	modal: false,
	loading: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppErrorAction: (state, action: AppErrorPayloadType) => {
			state.error = action.payload.error
		},
		cleanAppErrorAction: state => {
			state.error = null
		},
		enableAppDrawerAction: state => {
			state.drawer = true
		},
		disableAppDrawerAction: state => {
			state.drawer = false
		},
		enableAppOverlayAction: state => {
			state.overlay = true
		},
		disableAppOverlayAction: state => {
			state.overlay = false
		},
		enableAppModalAction: state => {
			state.modal = true
		},
		disableAppModalAction: state => {
			state.modal = false
		}
	}
})

export const {
	setAppErrorAction,
	cleanAppErrorAction,
	enableAppDrawerAction,
	enableAppOverlayAction,
	disableAppOverlayAction,
	disableAppDrawerAction,
	enableAppModalAction,
	disableAppModalAction
} = appSlice.actions
export default appSlice.reducer
