import { Form, Formik } from 'formik'
import * as yup from 'yup'
import useTypedDispatch from 'lib/hooks/use-typed-dispatch'
import { createTagRequest } from 'store/tags/slice'
import { useDraftTag } from 'store/tags/hooks'
import { createCategoryRequest } from 'store/categories/slice'
import PanelLayout from 'app/templates/panel'
import { Input } from 'components/forms'
import Button from 'components/base/button'
import { Card, CardBody, CardHeader, CardTitle } from 'components/base/card'

import { useDraftPlaylist } from 'store/playlists/hooks'
import { createPlaylistRequest } from 'store/playlists/slice'
import { useDraftCategory } from 'store/categories/hooks'
import './styles.scss'

const DashboardSettings: React.FC = () => {
	const dispatchTyped = useTypedDispatch()
	const { loading: createCategoryLoading } = useDraftCategory()
	const { loading: createTagLoading } = useDraftTag()
	const { loading: createPlaylistLoading } = useDraftPlaylist()

	const tagValidation = yup.object({
		tagLabel: yup.string().required('نام برچسب را وارد نمایید')
	})

	const playlistValidation = yup.object({
		playlistLabel: yup.string().required('نام لیست پخش را وارد نمایید')
	})

	const categoroyValidation = yup.object({
		categoryLabel: yup.string().required('نام دسته را وارد نمایید'),
		categorySlug: yup
			.string()
			.matches(/^[a-z]+$/, 'بصورت انگلیسی وارد نمایید مانند sport')
			.required('نامک را وارد نمایید'),
		categoryIcon: yup
			.string()
			.matches(/^[a-z]+$/, 'بصورت انگلیسی وارد نمایید مانند tio-home')
			.required('نام ایکون را وارد نمایید')
	})

	const tagForm = {
		initialValues: {
			tagLabel: ''
		},
		onSubmit: (value: any, { resetForm }: { resetForm: any }) => {
			dispatchTyped(
				createTagRequest({
					tag: { title: value.tagLabel, id: 0 }
				})
			)
			resetForm({})
		},
		validationSchema: tagValidation
	}

	const playlistForm = {
		initialValues: {
			playlistLabel: ''
		},
		onSubmit: (value: any, { resetForm }: { resetForm: any }) => {
			dispatchTyped(
				createPlaylistRequest({
					playlist: { title: value.playlistLabel }
				})
			)
			resetForm({})
		},
		validationSchema: playlistValidation
	}

	const categoryForm = {
		initialValues: {
			categoryLabel: '',
			categorySlug: '',
			categoryIcon: ''
		},
		onSubmit: (value: any, { resetForm }: { resetForm: any }) => {
			dispatchTyped(
				createCategoryRequest({
					category: {
						title: value.categoryLabel,
						icon: value.categoryIcon,
						slug: value.categorySlug
					}
				})
			)
			resetForm({})
		},
		validationSchema: categoroyValidation
	}

	return (
		<PanelLayout title="تنظیمات کانال">
			<Card className="mb-3 mb-lg-5">
				<CardHeader>
					<CardTitle className="h5">افزودن دسته‌بندی</CardTitle>
				</CardHeader>
				<CardBody>
					<Formik {...categoryForm}>
						<Form>
							<div className="mb-4">
								<p>
									برای اضافه کردن دسته‌ جدید, میتوانید از فروم زیر اسفاده کنید. دسته‌بندی
									شده را متوانید در صفحه ویدئو جدید مشاهده کنید.
								</p>
								<div className="row">
									<div className="col col-md-4">
										<Input
											name="categoryLabel"
											label="عنوان دسته"
											placeholder="به عنوان مثال ویدئو"
										/>
									</div>
									<div className="col col-md-4">
										<Input
											name="categoryIcon"
											label="ایکون"
											placeholder="مانند tio-battery-alert"
										/>
									</div>
									<div className="col col-md-4">
										<Input name="categorySlug" label="نامک" placeholder="video" />
									</div>
								</div>
							</div>
							<div className="d-flex justify-content-end">
								<Button type="submit" color="primary" loader={createCategoryLoading}>
									افزودن دسته
								</Button>
							</div>
						</Form>
					</Formik>
				</CardBody>
			</Card>
			<Card className="mb-5">
				<CardHeader>
					<CardTitle className="h5">افزودن برچسب</CardTitle>
				</CardHeader>

				<CardBody>
					<Formik {...tagForm}>
						<Form>
							<div className="mb-4">
								<p>
									برای اضافه کردن برچسب جدید, میتوانید از فروم زیر اسفاده کنید. برچسب های
									را متوانید در صفحه ویدئو جدید مشاهده کنید.
								</p>
							</div>
							<div className="row">
								<div className="col col-md-6">
									<Input
										name="tagLabel"
										label="عنوان برچسب"
										placeholder="به عنوان مثال ورزشی"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-end">
								<Button type="submit" color="primary" loader={createTagLoading}>
									افزودن برچسب
								</Button>
							</div>
						</Form>
					</Formik>
				</CardBody>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle className="h5">افزودن لیست پخش</CardTitle>
				</CardHeader>

				<CardBody>
					<Formik {...playlistForm}>
						<Form>
							<div className="mb-4">
								<p>لیست پخش ساخته شده را متوانید در صفحه ویدئو جدید مشاهده کنید.</p>
							</div>
							<div className="row">
								<div className="col col-md-6">
									<Input
										name="playlistLabel"
										label="عنوان لیست پخش"
										placeholder="به عنوان مثال ورزشی"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-end">
								<Button type="submit" color="primary" loader={createPlaylistLoading}>
									افزودن لیست پخش
								</Button>
							</div>
						</Form>
					</Formik>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardSettings
