import { useFormik } from 'formik'
import { useSelector } from 'react-redux'

import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { setTagStartAction } from '../../../../store/tags/slice'
import { selectTagsAddItemLoading } from '../../../../store/tags/selectors'
import { selectCategoryAddItemLoading } from '../../../../store/categories/selectors'

import PanelLayout from '../../../layouts/panel'
import { Input } from '../../../elements/form'
import Button from '../../../elements/button'
import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'

import './styles.scss'

const DashboardSettings: React.FC = () => {
	const dispatchTyped = useTypedDispatch()
	const addItemTagLoading = useSelector(selectTagsAddItemLoading)
	const addItemCategoryLoading = useSelector(selectCategoryAddItemLoading)

	const tagForm = useFormik({
		initialValues: {
			tagLabel: ''
		},
		onSubmit: (value: any, { resetForm }) => {
			dispatchTyped(
				setTagStartAction({
					data: { title: value.tagLabel, id: 0 }
				})
			)
			resetForm({})
		}
	})

	const categoryForm = useFormik({
		initialValues: {
			categoryLabel: ''
		},
		onSubmit: (value: any, { resetForm }) => {
			dispatchTyped(
				setTagStartAction({
					data: { title: value.tagLabel, id: 0 }
				})
			)
			resetForm({})
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
						<div className="row">
							<div className="col col-md-6">
								<Input
									name="categoryLabel"
									label="عنوان دسته"
									placeholder="به عنوان مثال ویدئو"
									onChange={categoryForm.handleChange}
									value={categoryForm.values.tagLabel}
								/>
							</div>
							<div className="col col-md-6"></div>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<Button color="primary" loader={addItemCategoryLoading}>
							افزودن دسته
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
									name="tagLabel"
									label="عنوان برچسب"
									placeholder="به عنوان مثال ورزشی"
									onChange={tagForm.handleChange}
									value={tagForm.values.tagLabel}
								/>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<Button type="submit" color="primary" loader={addItemTagLoading}>
								افزودن برچسب
							</Button>
						</div>
					</form>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardSettings
