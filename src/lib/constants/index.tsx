type PostState =
	| {
			label: 'منتشر شده'
			value: 'accepted'
	  }
	| {
			label: 'درحال برسی'
			value: 'pending'
	  }
	| {
			label: 'تبدیل شده'
			value: 'converted'
	  }
	| {
			label: 'رد شده'
			value: 'blocked'
	  }

export const VIDEO_STATE = {
	ACCEPTED: (): PostState => ({
		label: 'منتشر شده',
		value: 'accepted'
	}),
	PENDING: (): PostState => ({
		label: 'درحال برسی',
		value: 'pending'
	}),
	CONVERTED: (): PostState => ({
		label: 'تبدیل شده',
		value: 'converted'
	}),
	BLOCKED: (): PostState => ({
		label: 'رد شده',
		value: 'blocked'
	})
}

export default VIDEO_STATE
