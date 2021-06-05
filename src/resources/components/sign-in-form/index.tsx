import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import useTypedDispatch from '../../../hooks/use-typed-dispatch'

import { selectUserSignInLoading } from '../../../store/user/selectors'
import { signInAction } from '../../../store/user/slice'

import Button from '../../elements/button'
import { Input } from '../../elements/form'

interface SignInFormType {
	username: string
	password: string
}

const SignInForm: React.FC = () => {
	const dispatch = useTypedDispatch()
	const signInLoading = useSelector(selectUserSignInLoading)

	const form = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: (user: SignInFormType) => {
			dispatch(signInAction({ user }))
		}
	})
	return (
		<form onSubmit={form.handleSubmit}>
			<Input
				name="username"
				label="نام کاربری"
				onChange={form.handleChange}
				value={form.values.username}
			/>
			<Input
				name="password"
				label="پسورد"
				placeholder="حداقل 8 کارکتر وارد نمایید"
				value={form.values.password}
				onChange={form.handleChange}
			/>
			<Button type="submit" color="primary" size="lg" loader={signInLoading} block>
				ورود
			</Button>
		</form>
	)
}

export default SignInForm
