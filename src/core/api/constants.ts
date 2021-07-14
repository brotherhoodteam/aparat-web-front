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
		GET_LIST: (page?: string, per_page?: string): EndPoint => {
			let queries = ''
			if (page || per_page) {
				queries += '?'
			}
			if (page) {
				queries += `page=${page}`
			}
			if (page && per_page) {
				queries += '&'
			}
			if (per_page) {
				queries += `page=${per_page}`
			}
			return {
				url: `/video${queries ? '/' + queries : ''}`,
				method: 'GET'
			}
		},
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
