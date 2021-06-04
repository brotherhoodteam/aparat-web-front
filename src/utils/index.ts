import { CredentialsType } from '../store/user/interface'

export const setAuth = (data: CredentialsType): void => {
	const key = 'auth'
	localStorage.setItem(key, JSON.stringify(data))
}

export const getAuth = (): CredentialsType | null => {
	const key = 'auth'
	let auth = null
	try {
		auth = localStorage.getItem(key)
		if (auth) auth = JSON.parse(auth)
	} catch (error) {}
	return auth
}

export const getErrorInfo = (error: any) => {
	const { response, message, status } = error
	const errorMessage: string = response ? response.data.message : message
	const statusCode: number = response ? response.status : status
	const statusType: string = getStatusType(statusCode)

	return { errorMessage, statusCode, statusType }
}

export const getStatusType = (code: number) => {
	const httpStatusCodes: any = {
		200: 'success',
		201: 'success',
		202: 'success',
		203: 'success',
		204: 'success',
		205: 'success',
		206: 'success',
		207: 'success',
		208: 'success',
		400: 'warn',
		401: 'warn',
		402: 'warn',
		403: 'warn',
		404: 'warn',
		405: 'warn',
		406: 'warn',
		407: 'warn',
		408: 'warn',
		409: 'warn',
		410: 'warn',
		411: 'warn',
		412: 'warn',
		413: 'warn',
		414: 'warn',
		415: 'warn',
		416: 'warn',
		417: 'warn',
		418: 'warn',
		421: 'warn',
		422: 'warn',
		423: 'warn',
		424: 'warn',
		426: 'warn',
		428: 'warn',
		429: 'warn',
		431: 'warn',
		444: 'warn',
		451: 'warn',
		499: 'warn',
		500: 'error',
		501: 'error',
		502: 'error',
		503: 'error',
		504: 'error',
		505: 'error',
		506: 'error',
		507: 'error',
		508: 'error',
		509: 'error',
		510: 'error',
		511: 'error',
		599: 'error'
	}

	return httpStatusCodes[code]
}
