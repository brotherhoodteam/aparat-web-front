import { PayloadAction } from '@reduxjs/toolkit'

// Models
export type LocaleType = 'en' | 'fa'

// Data
export interface LocaleDataType {
	locale: LocaleType
}

// Payload
export interface SetLocalePayload extends PayloadAction<LocaleDataType> {}

// State
export interface IntlState {
	locale: LocaleType
}
export type IntlActionTypes = SetLocalePayload
