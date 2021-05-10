import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Locales from '../../core/react-intl/types'
import { IntlState, SetLocaleAction } from './types'

// Define the initial state
const initialState: IntlState = {
	locale: Locales.DEFAULT
}

const intlSlice = createSlice({
	name: 'intl',
	initialState,
	reducers: {
		setLocale: (state, action: PayloadAction<SetLocaleAction>) => {
			state.locale = action.payload
		}
	}
})

// Export IntlReucer and Actions
export const { setLocale } = intlSlice.actions
export default intlSlice.reducer