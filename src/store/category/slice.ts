import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [
		{
			id: 1,
			label: 'سریال و فیلم‌های سینمایی',
			value: 'movie',
			icon: 'tio-movie',
			to: '/dashboard'
		},
		{
			id: 2,
			label: 'گیم',
			value: 'game',
			icon: 'tio-joystick ',
			to: '/dashboard'
		},
		{
			id: 3,
			label: 'ورزشی',
			value: 'sport',
			icon: 'tio-sport ',
			to: '/dashboard'
		},
		{
			id: 4,
			label: 'کارتون',
			value: 'cartons',
			icon: 'tio-face-male ',
			to: '/dashboard'
		},
		{
			id: 5,
			label: 'آشپزی',
			value: 'ummy',
			icon: 'tio-meal ',
			to: '/dashboard'
		},
		{
			id: 6,
			label: 'آموزشی',
			value: 'tutorial',
			icon: 'tio-education ',
			to: '/dashboard'
		},
		{
			id: 7,
			label: 'موسیقی',
			value: 'music',
			icon: 'tio-music ',
			to: '/dashboard'
		},
		{
			id: 8,
			label: 'حیوانات',
			value: 'animal',
			icon: 'tio-pet ',
			to: '/dashboard'
		},
		{
			id: 9,
			label: 'علم و تکنولوژی',
			value: 'tech',
			icon: 'tio-augmented-reality ',
			to: '/dashboard'
		},
		{
			id: 10,
			label: 'خبری',
			value: 'news',
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
