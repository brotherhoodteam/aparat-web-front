import { createSlice } from '@reduxjs/toolkit'
import { StatusPayload, StatusStateType } from './interface'

const initialState: StatusStateType = {
	status: null,
	message: null
}
const statusSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		setStatusAction: (state, action: StatusPayload) => {
			state.status = action.payload.status
			state.message = action.payload.message
		},
		clearStatusAction: state => {
			state.status = null
			state.message = null
		}
	}
})

export const { setStatusAction, clearStatusAction } = statusSlice.actions
export default statusSlice.reducer
