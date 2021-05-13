import { Form, Formik } from 'formik'
import Button from '../../elements/button'
import { Input } from '../../elements/form'

const SignInForm: React.FC = () => {
	const signInForm = {
		initialValues: {
			firstName: '',
			lastName: '',
			email: ''
		},
		onSubmit: (values: any) => {
			console.log('value', values)
		},
		onReset: () => {
			console.log('dd')
		}
	}
	return (
		<Formik {...signInForm}>
			<Form>
				<Input name="email" label="ایمیل" placeholder="email@address.com" />
				<Input name="password" label="پسورد" placeholder="حداقل 8 کارکتر وارد نمایید" />
				<Button type="submit" color="primary" size="lg" block>
					ورود
				</Button>
			</Form>
		</Formik>
	)
}

export default SignInForm
