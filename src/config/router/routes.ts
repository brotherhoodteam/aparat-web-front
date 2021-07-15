enum BASE_URL {
	DASHBOARD = 'dashboard',
	VIDEO = 'video'
}
interface RouteType {
	path: string
	link: string
}
const ROUTES = {
	MAIN: {
		HOME: (): RouteType => ({ path: '/', link: '/' }),
		NOTFOUND: (): RouteType => ({ path: '/notfound', link: 'notfound' })
	},
	VIDEO: {
		SINGLE: (slug?: string) => ({
			path: `${BASE_URL.VIDEO}/:slug`,
			link: `${BASE_URL.VIDEO}/${slug}`
		})
	},
	DASHBOARD: {
		OVERVIEW: () => ({
			path: `/${BASE_URL.DASHBOARD}`,
			link: `/${BASE_URL.DASHBOARD}`
		}),
		ADD_VIDEO: (): RouteType => ({
			path: `/${BASE_URL.DASHBOARD}/video/add`,
			link: `/${BASE_URL.DASHBOARD}/video/add`
		}),
		EDIT_VIDEO: (slug?: string) => ({
			path: `/${BASE_URL.DASHBOARD}/video/edit/:slug`,
			link: `/${BASE_URL.DASHBOARD}/video/edit/${slug}`
		}),
		VIDEOS: () => ({
			path: `/${BASE_URL.DASHBOARD}/videos`,
			link: `/${BASE_URL.DASHBOARD}/videos`
		}),
		SETTINGS: () => ({
			path: `/${BASE_URL.DASHBOARD}/settings`,
			link: `/${BASE_URL.DASHBOARD}/settings`
		}),
		COMMENTS: () => ({
			path: `/${BASE_URL.DASHBOARD}/comments`,
			link: `/${BASE_URL.DASHBOARD}/comments`
		}),
		CHANNELS: () => ({
			path: `/${BASE_URL.DASHBOARD}/channels`,
			link: `/${BASE_URL.DASHBOARD}/channels`
		})
	},
	AUTH: {
		SIGNIN: () => ({
			path: `/signin`,
			link: `/signin`
		}),
		SIGNUP: () => ({
			path: `/signup`,
			link: `/signup`
		})
	}
}

export default ROUTES
