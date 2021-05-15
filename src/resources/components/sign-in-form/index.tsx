import { Form, Formik } from 'formik'
import useTypedDispatch from '../../../hooks/use-typed-dispatch'
import { signInAction } from '../../../store/user/slice'
import Button from '../../elements/button'
import { Input } from '../../elements/form'

const SignInForm: React.FC = () => {
	const dispatch = useTypedDispatch()
	const signInForm = {
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: ({ username, password }: any) => {
			dispatch(signInAction({ username, password }))
		}
	}
	return (
		<Formik {...signInForm}>
			<Form>
				<Input name="username" label="نام کاربری" placeholder="" />
				<Input name="password" label="پسورد" placeholder="حداقل 8 کارکتر وارد نمایید" />
				<Button type="submit" color="primary" size="lg" block>
					ورود
				</Button>
			</Form>
		</Formik>
	)
}

export default SignInForm
