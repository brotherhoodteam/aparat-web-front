import { createSlice } from '@reduxjs/toolkit'
import Locale from 'lib/lang/constant'
import { IntlState, SelectLocale } from './types'

// Define the initial state
const initialState: IntlState = {
	locale: Locale.DEFAULT
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
