const baseApi = process.env.REACT_APP_API_URL
const endPoint = `${baseApi}/v1/browse/categories`

const categoriesApi = {
	getAll: () => ({
		url: endPoint,
		method: 'GET'
	}),
	getCategory: (id: number) => ({
		url: `${endPoint}/${id}`,
		method: 'GET'
	}),
	getPlaylist: (id: number) => ({
		url: `${endPoint}/${id}/playlists`,
		method: 'GET'
	})
}

export default categoriesApi
