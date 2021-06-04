import { useFormik } from 'formik'
import { useSelector } from 'react-redux'

import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { setTagStartAction } from '../../../../store/tags/slice'
import { selectTagsAddItemLoading } from '../../../../store/tags/selectors'
import { selectCategoryAddItemLoading } from '../../../../store/categories/selectors'
import { setCategoryStartAction } from '../../../../store/categories/slice'

import PanelLayout from '../../../layouts/panel'
import { Input } from '../../../elements/form'
import Button from '../../../elements/button'
import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'

import './styles.scss'
import { selectPlaylistAddItemLoading } from '../../../../store/playlists/selectors'
import { setPlaylistStartAction } from '../../../../store/playlists/slice'

interface CategoryState {
	categoryLabel: string
	categoryIcon: string
	categorySlug: string
}
interface TagState {
	tagLabel: string
}
interface PalylistState {
	playlistLabel: string
}

const DashboardSettings: React.FC = () => {
	const dispatchTyped = useTypedDispatch()
	const addItemTagLoading = useSelector(selectTagsAddItemLoading)
	const addItemCategoryLoading = useSelector(selectCategoryAddItemLoading)
	const addItemPlaylistLoading = useSelector(selectPlaylistAddItemLoading)

	const tagForm = useFormik<TagState>({
		initialValues: {
			tagLabel: ''
		},
		onSubmit: (value, { resetForm }) => {
			dispatchTyped(
				setTagStartAction({
					data: { title: value.tagLabel, id: 0 }
				})
			)
			resetForm({})
		}
	})

	const playlistForm = useFormik<PalylistState>({
		initialValues: {
			playlistLabel: ''
		},
		onSubmit: (value, { resetForm }) => {
			dispatchTyped(
				setPlaylistStartAction({
					data: { title: value.playlistLabel }
				})
			)
			resetForm({})
		}
	})

	const categoryForm = useFormik<CategoryState>({
		initialValues: {
			categoryLabel: '',
			categorySlug: '',
			categoryIcon: ''
		},
		onSubmit: (value, { resetForm }) => {
			dispatchTyped(
				setCategoryStartAction({
					data: {
						title: value.categoryLabel,
						icon: value.categoryIcon,
						slug: value.categorySlug
					}
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
					<form onSubmit={categoryForm.handleSubmit}>
						<div className="mb-4">
							<p>
								برای اضافه کردن دسته‌ جدید, میتوانید از فروم زیر اسفاده کنید. دسته‌بندی
								های ساخته شده را متوانید در صفحه ویدئو جدید مشاهده کنید.
							</p>
							<div className="row">
								<div className="col col-md-4">
									<Input
										name="categoryLabel"
										label="عنوان دسته"
										placeholder="به عنوان مثال ویدئو"
										onChange={categoryForm.handleChange}
										value={categoryForm.values.categoryLabel}
									/>
								</div>
								<div className="col col-md-4">
									<Input
										name="categoryIcon"
										label="ایکون"
										placeholder="مانند tio-battery-alert"
										onChange={categoryForm.handleChange}
										value={categoryForm.values.categoryIcon}
									/>
								</div>
								<div className="col col-md-4">
									<Input
										name="categorySlug"
										label="نامک"
										placeholder="video"
										onChange={categoryForm.handleChange}
										value={categoryForm.values.categorySlug}
									/>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<Button type="submit" color="primary" loader={addItemCategoryLoading}>
								افزودن دسته
							</Button>
						</div>
					</form>
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
			<Card>
				<CardHeader>
					<CardTitle className="h5">افزودن لیست پخش</CardTitle>
				</CardHeader>

				<CardBody>
					<form onSubmit={playlistForm.handleSubmit}>
						<div className="mb-4">
							<p>لیست پخش ساخته شده را متوانید در صفحه ویدئو جدید مشاهده کنید.</p>
						</div>
						<div className="row">
							<div className="col col-md-6">
								<Input
									name="playlistLabel"
									label="عنوان لیست پخش"
									placeholder="به عنوان مثال ورزشی"
									onChange={playlistForm.handleChange}
									value={playlistForm.values.playlistLabel}
								/>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<Button type="submit" color="primary" loader={addItemPlaylistLoading}>
								افزودن لیست پخش
							</Button>
						</div>
					</form>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardSettings
