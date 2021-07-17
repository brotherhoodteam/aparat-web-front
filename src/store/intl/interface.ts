import { PayloadAction } from '@reduxjs/toolkit'

// TYPIES
export type Locale = 'en' | 'fa'

// PAYLOAD
export interface SelectLocalePayload {
	locale: Locale
}

// ACTION
export interface SelectLocale extends PayloadAction<SelectLocalePayload> {}

// State
export interface IntlState {
	locale: Locale
}
export type IntlActions = SelectLocale
