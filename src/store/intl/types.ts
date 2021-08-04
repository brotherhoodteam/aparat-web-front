import { PayloadAction } from '@reduxjs/toolkit'
import { Locale } from 'lib/types/locale'

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
