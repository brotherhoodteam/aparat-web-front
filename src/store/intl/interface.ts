import { PayloadAction } from '@reduxjs/toolkit'

// Define general type
export type LocaleType = 'en' | 'fa'

// Define types for the slice actions
export type SetLocaleAction = LocaleType

// Define a type for the slice state
export interface IntlState {
	locale: SetLocaleAction
}
export type IntlActionTypes = PayloadAction<SetLocaleAction>
