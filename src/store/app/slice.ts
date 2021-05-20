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
		openAppOverlay: state => {
			state.overlay = true
		}
	}
})

export const {
	setAppErrorAcion,
	cleanAppErrorAction,
	openAppDrawer,
	openAppOverlay
} = appSlice.actions
export default appSlice.reducer
