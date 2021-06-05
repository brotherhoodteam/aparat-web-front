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
		setLocale: (state, action: SetLocalePayload) => {
			state.locale = action.payload.locale
		}
	}
})

// Export IntlReucer and Actions
export const { setLocale } = intlSlice.actions
export default intlSlice.reducer
