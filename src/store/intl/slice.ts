import { createSlice } from '@reduxjs/toolkit'
import Locales from 'core/lang/constant'
import { IntlState, SelectLocale } from './interface'

// Define the initial state
const initialState: IntlState = {
	locale: Locales.DEFAULT
}

const intlSlice = createSlice({
	name: 'intl',
	initialState,
	reducers: {
		selectLocale: (state, action: SelectLocale) => {
			state.locale = action.payload.locale
		}
	}
})

// Export IntlReucer and Actions
export const { selectLocale } = intlSlice.actions
export default intlSlice.reducer
