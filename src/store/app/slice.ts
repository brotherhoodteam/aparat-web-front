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
		setAppErrorAcion: (state, action: AppErrorActionPayloadType) => {
			state.error = action.payload.error
		},
		cleanAppErrorAction: state => {
			state.error = null
		},
		openAppDrawer: state => {
			state.drawer = true
		},
		closeAppDrawer: state => {
			state.drawer = false
		},
		openAppOverlay: state => {
			state.overlay = true
		},
		closeAppOverlay: state => {
			state.overlay = false
		}
	}
})

export const {
	setAppErrorAcion,
	cleanAppErrorAction,
	openAppDrawer,
	openAppOverlay,
	closeAppOverlay,
	closeAppDrawer
} = appSlice.actions
export default appSlice.reducer
