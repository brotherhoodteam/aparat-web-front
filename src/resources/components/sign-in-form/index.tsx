import { ErrorMessage, Formik, Form, useFormik } from 'formik'
import { useSelector } from 'react-redux'
import useTypedDispatch from '../../../hooks/use-typed-dispatch'

import { selectUserSignInLoading } from '../../../store/user/selectors'
import { signInAction } from '../../../store/user/slice'
import * as yup from 'yup'

import Button from '../../elements/button'
import { Input } from '../../elements/form'

interface SignInFormType {
	username: string
	password: string
}

const SignInForm: React.FC = () => {
	const dispatch = useTypedDispatch()
	const signInLoading = useSelector(selectUserSignInLoading)

	const validationSchema = yup.object({
		username: yup.string().required('Required!'),
		password: yup
			.string()
			.min(8, 'Password Must be 8 or more letter')
			.required('Required')
	})
	const form = {
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: (user: SignInFormType) => {
			dispatch(signInAction({ user }))
		},
		validationSchema
	}

	console.log('form')
	return (
		<Formik {...form}>
			<Form>
				<Input name="username" label="نام کاربری" />
				<ErrorMessage name="username" className="error" />
				<Input name="password" label="پسورد" placeholder="حداقل 8 کارکتر وارد نمایید" />
				<Button type="submit" color="primary" size="lg" loader={signInLoading} block>
					ورود
				</Button>
			</Form>
		</Formik>
	)
}

export default SignInForm
