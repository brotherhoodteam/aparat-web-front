import { PayloadAction } from '@reduxjs/toolkit'

// Models
export type LocaleType = 'en' | 'fa'

// Data
export type LocaleDataType = {
	locale: LocaleType
}

// Payload
export interface SetLocaleActionPayload extends PayloadAction<LocaleDataType> {}

// State
export interface IntlState {
	locale: LocaleType
}
export type IntlActionTypes = SetLocaleActionPayload
