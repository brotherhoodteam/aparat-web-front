import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [
		{
			id: 1,
			label: 'سریال و فیلم‌های سینمایی',
			value: 'سریال و فیلم‌های سینمایی',
			icon: 'tio-movie',
			to: '/dashboard'
		},
		{
			id: 2,
			label: 'گیم',
			value: 'گیم',
			icon: 'tio-joystick ',
			to: '/dashboard'
		},
		{
			id: 3,
			label: 'ورزشی',
			value: 'ورزشی',
			icon: 'tio-sport ',
			to: '/dashboard'
		},
		{
			id: 4,
			label: 'کارتون',
			value: 'کارتون',
			icon: 'tio-face-male ',
			to: '/dashboard'
		},
		{
			id: 5,
			label: 'آشپزی',
			value: 'آشپزی',
			icon: 'tio-meal ',
			to: '/dashboard'
		},
		{
			id: 6,
			label: 'آموزشی',
			value: 'آموزشی',
			icon: 'tio-education ',
			to: '/dashboard'
		},
		{
			id: 7,
			label: 'موسیقی',
			value: 'موسیقی',
			icon: 'tio-music ',
			to: '/dashboard'
		},
		{
			id: 8,
			label: 'حیوانات',
			value: 'حیوانات',
			icon: 'tio-pet ',
			to: '/dashboard'
		},
		{
			id: 9,
			label: 'علم و تکنولوژی',
			value: 'علم و تکنولوژی',
			icon: 'tio-augmented-reality ',
			to: '/dashboard'
		},
		{
			id: 10,
			label: 'خبری',
			value: 'خبری',
			icon: 'tio-feed ',
			to: '/dashboard'
		}
	]
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {}
})

export default categorySlice.reducer
