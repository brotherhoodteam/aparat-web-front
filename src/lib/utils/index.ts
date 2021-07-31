export const getErrorInfo = (error: any) => {
	const { response, message, status } = error
	const errorMessage: string = response ? response.data.message : message
	const statusCode: number = response ? response.status : status

	return { errorMessage, statusCode }
}

export const imageResolver = (banner: string) => {
	const baseUrl = process.env.REACT_APP_BASE_URL
	const imgUrl = `${baseUrl}/videos/tmp/${banner}`

	return imgUrl
}
