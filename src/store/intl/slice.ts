import { createSlice } from '@reduxjs/toolkit'
import Locales from '../../core/react-intl/interface'
import { IntlState, SetLocalePayload } from './interface'

// Define the initial state
const initialState: IntlState = {
	locale: Locales.DEFAULT
}

const intlSlice = createSlice({
	name: 'intl',
	initialState,
	reducers: {
		setLocaleAction: (state, action: SetLocalePayload) => {
			state.locale = action.payload.locale
		}
	}
})

// Export IntlReucer and Actions
export const { setLocaleAction } = intlSlice.actions
export default intlSlice.reducer
