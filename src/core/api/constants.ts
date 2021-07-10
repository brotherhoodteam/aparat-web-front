import { Method } from 'axios'

interface EndPoint {
	url: string
	method: Method
}
export const API_END_POINT = {
	AUTH: {
		LOGIN: (): EndPoint => ({
			url: '/login',
			method: 'POST'
		})
	},
	VIDEO: {
		GET: (slug: string): EndPoint => ({
			url: `/video/${slug}`,
			method: 'GET'
		}),
		GET_LIST: (pagination?: string): EndPoint => ({
			url: `/video${pagination ? '?' + pagination : ''}`,
			method: 'GET'
		}),
		DELETE: (slug: string): EndPoint => ({
			url: `/video/${slug}`,
			method: 'DELETE'
		}),
		UPDATE: (slug: string): EndPoint => ({
			url: `/video/${slug}`,
			method: 'PUT'
		}),
		UPLOAD: (): EndPoint => ({
			url: '/video/upload',
			method: 'POST'
		}),
		BANNER: (): EndPoint => ({
			url: '/video/upload-banner',
			method: 'POST'
		}),
		PUBLISH: (): EndPoint => ({
			url: '/video',
			method: 'POST'
		})
	},
	CATEGORIES: {
		SET: (): EndPoint => ({ url: '/category', method: 'POST' }),
		GET: (): EndPoint => ({ url: '/category', method: 'GET' })
	},
	TAGS: {
		SET: (): EndPoint => ({ url: '/tag', method: 'POST' }),
		GET: (): EndPoint => ({ url: '/tag', method: 'GET' })
	},
	PLAYLISTS: {
		SET: (): EndPoint => ({ url: '/playlist', method: 'POST' }),
		GET: (): EndPoint => ({ url: '/playlist', method: 'GET' })
	}
}
