import { Form, Formik } from 'formik'
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

	const initialValues: SignInFormType = {
		username: '',
		password: ''
	}
	const onSubmit = ({ username, password }: SignInFormType) => {
		dispatch(signInAction({ password, username }))
	}
	const signInForm = { initialValues, onSubmit }

	return (
		<Formik {...signInForm}>
			<Form>
				<Input name="username" label="نام کاربری" placeholder="" />
				<Input name="password" label="پسورد" placeholder="حداقل 8 کارکتر وارد نمایید" />
				<Button type="submit" color="primary" size="lg" loader={signInLoading} block>
					ورود
				</Button>
			</Form>
		</Formik>
	)
}

export default SignInForm
