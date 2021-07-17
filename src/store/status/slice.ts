import { createSlice } from '@reduxjs/toolkit'
import { ShowStatusPayload, StatusState } from './interface'

const initialState: StatusState = {
	status: null,
	message: null
}
const statusSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		showStatusAction: (state, action: ShowStatusPayload) => {
			state.status = action.payload.status
			state.message = action.payload.message
		},
		clearStatusAction: state => {
			state.status = null
			state.message = null
		}
	}
})

export const { showStatusAction, clearStatusAction } = statusSlice.actions
export default statusSlice.reducer
