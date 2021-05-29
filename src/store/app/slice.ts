import { createSlice } from '@reduxjs/toolkit'
import { AppErrorActionPayloadType, AppStateType } from './interface'
const initialState: AppStateType = {
	error: null,
	drawer: false,
	overlay: false,
	loading: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setAppErrorAction: (state, action: AppErrorActionPayloadType) => {
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
		}
	}
})

export const {
	setAppErrorAction,
	cleanAppErrorAction,
	openAppDrawerAction,
	openAppOverlayAction,
	closeAppOverlayAction,
	closeAppDrawerAction
} = appSlice.actions
export default appSlice.reducer
