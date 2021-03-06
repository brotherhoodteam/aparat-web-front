enum BASE_URL {
	DASHBOARD = 'dashboard',
	VIDEO = 'video'
}
interface Route {
	path: string
	link: string
}
const ROUTES = {
	MAIN: {
		HOME: (): Route => ({ path: '/', link: '/' }),
		NOTFOUND: (): Route => ({ path: '/notfound', link: 'notfound' })
	},
	VIDEO: {
		SINGLE: (slug?: string) => ({
			path: `/${BASE_URL.VIDEO}/:slug`,
			link: `/${BASE_URL.VIDEO}/${slug}`
		})
	},
	DASHBOARD: {
		OVERVIEW: () => ({
			path: `/${BASE_URL.DASHBOARD}`,
			link: `/${BASE_URL.DASHBOARD}`
		}),
		ADD_VIDEO: (): Route => ({
			path: `/${BASE_URL.DASHBOARD}/video/add`,
			link: `/${BASE_URL.DASHBOARD}/video/add`
		}),
		VIDEO: (slug?: string) => ({
			path: `/${BASE_URL.DASHBOARD}/video/:slug`,
			link: `/${BASE_URL.DASHBOARD}/video/${slug}`
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
		}),
		FOLLOWERS: () => ({
			path: `/${BASE_URL.DASHBOARD}/channels/followers`,
			link: `/${BASE_URL.DASHBOARD}/channels/followers`
		}),
		FOLLOWING: () => ({
			path: `/${BASE_URL.DASHBOARD}/channels/following`,
			link: `/${BASE_URL.DASHBOARD}/channels/following`
		}),
		PROFILE: (slug?: string) => ({
			path: `/${BASE_URL.DASHBOARD}/profile`,
			link: `/${BASE_URL.DASHBOARD}/profile/${slug}`
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
