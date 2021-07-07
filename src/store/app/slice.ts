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
		openAppDrawerAction: state => {
			state.drawer = true
		},
		closeAppDrawerAction: state => {
			state.drawer = false
		},
		openAppOverlayAction: state => {
			state.overlay = true
		},
		closeAppOverlayAction: state => {
			state.overlay = false
		},
		openAppModalAction: state => {
			state.modal = true
		},
		closeAppModalAction: state => {
			state.modal = false
		}
	}
})

export const {
	setAppErrorAction,
	cleanAppErrorAction,
	openAppDrawerAction,
	openAppOverlayAction,
	closeAppOverlayAction,
	closeAppDrawerAction,
	openAppModalAction,
	closeAppModalAction
} = appSlice.actions
export default appSlice.reducer
