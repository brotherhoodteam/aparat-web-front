import { useFormik } from 'formik'
import { Input } from '../../../elements/form'
import Button from '../../../elements/button'
import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import PanelLayout from '../../../layouts/panel'
import './styles.scss'

const DashboardSettings: React.FC = () => {
	const tagForm = useFormik({
		initialValues: {
			label: 'taglabel'
		},
		onSubmit: (value: any) => {
			console.log('')
		}
	})
	return (
		<PanelLayout title="تنظیمات کانال">
			<Card className="mb-3 mb-lg-5">
				<CardHeader>
					<CardTitle className="h5">افزودن دسته‌بندی</CardTitle>
				</CardHeader>
				<CardBody>
					<div className="mb-4">
						<p>
							برای اضافه کردن دسته‌ جدید, میتوانید از فروم زیر اسفاده کنید. دسته‌بندی های
							ساخته شده را متوانید در صفحه ویدئو جدید مشاهده کنید.
						</p>
					</div>
					<div className="d-flex justify-content-end">
						<Button color="primary" loader={false}>
							افزودن
						</Button>
					</div>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="h5">افزودن برچسب</CardTitle>
				</CardHeader>

				<CardBody>
					<form onSubmit={tagForm.handleSubmit}>
						<div className="mb-4">
							<p>
								برای اضافه کردن برچسب جدید, میتوانید از فروم زیر اسفاده کنید. برچسب های
								ساخته شده را متوانید در صفحه ویدئو جدید مشاهده کنید.
							</p>
						</div>
						<div className="row">
							<div className="col col-md-6">
								<Input
									name="taglabel"
									label="عنوان برچسب"
									placeholder="به عنوان مثال ورزشی"
									onChange={tagForm.handleChange}
									value={tagForm.values.label}
								/>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<Button color="primary" loader={false}>
								افزودن
							</Button>
						</div>
					</form>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardSettings
