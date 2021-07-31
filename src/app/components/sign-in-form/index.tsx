import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'
import useTypedDispatch from 'lib/hooks/use-typed-dispatch'

import { selectSignIn } from 'store/auth/selectors'
import { signInRequest } from 'store/auth/slice'
import * as yup from 'yup'

import Button from 'app/elements/button'
import { Input } from 'app/elements/form'

interface SignInForm {
	username: string
	password: string
}

const SignInForm: React.FC = () => {
	const dispatch = useTypedDispatch()
	const { loading } = useSelector(selectSignIn)

	const validationSchema = yup.object({
		username: yup.string().required('فیلد را وارد نمایید'),
		password: yup
			.string()
			.min(6, 'برای گذرواژه حداقل 6 کاراکتر باید وارد کنید')
			.required('فیلد را وارد نمایید')
	})
	const form = {
		initialValues: {
			username: 'admin@aparat.me',
			password: '123456'
		},
		onSubmit: (user: SignInForm) => {
			dispatch(signInRequest({ passport: user }))
		},
		validationSchema
	}

	return (
		<Formik {...form}>
			<Form>
				<Input name="username" label="نام کاربری" placeholder="arash" />
				<Input
					type="password"
					name="password"
					label="پسورد"
					placeholder="حداقل 8 کارکتر وارد نمایید"
				/>
				<Button type="submit" color="primary" size="lg" loader={loading} block>
					ورود
				</Button>
			</Form>
		</Formik>
	)
}

export default SignInForm
