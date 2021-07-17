import { createSlice } from '@reduxjs/toolkit'
import { AppErrorPayload, AppState } from './interface'

const initialState: AppState = {
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
		openAppError: (state, action: AppErrorPayload) => {
			state.error = action.payload.error
		},
		cleanAppError: state => {
			state.error = null
		},
		enableAppDrawer: state => {
			state.drawer = true
		},
		disableAppDrawer: state => {
			state.drawer = false
		},
		enableAppOverlay: state => {
			state.overlay = true
		},
		disableAppOverlay: state => {
			state.overlay = false
		},
		enableAppModal: state => {
			state.modal = true
		},
		disableAppModal: state => {
			state.modal = false
		}
	}
})

export const {
	openAppError,
	cleanAppError,
	enableAppDrawer,
	enableAppOverlay,
	disableAppOverlay,
	disableAppDrawer,
	enableAppModal,
	disableAppModal
} = appSlice.actions
export default appSlice.reducer
