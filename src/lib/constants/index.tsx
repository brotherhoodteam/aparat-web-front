type VideoState =
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
	ACCEPTED: (): VideoState => ({
		label: 'منتشر شده',
		value: 'accepted'
	}),
	PENDING: (): VideoState => ({
		label: 'درحال برسی',
		value: 'pending'
	}),
	CONVERTED: (): VideoState => ({
		label: 'تبدیل شده',
		value: 'converted'
	}),
	BLOCKED: (): VideoState => ({
		label: 'رد شده',
		value: 'blocked'
	})
}

export default VIDEO_STATE
