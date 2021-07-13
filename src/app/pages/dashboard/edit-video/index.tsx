import { useMemo, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import * as yup from 'yup'

import useTypedDispatch from 'core/hooks/use-typed-dispatch'
import {
	getVideoStartAction,
	updateVideoStartAction,
	uploadBannerStartAction
} from 'store/video/slice'
import { useCategories } from 'store/categories/hooks'
import { selectGetVideo, selectUploadBanner } from 'store/video/selectors'

import { Input, SelectBox, TextArea, Switch, CopyInput } from 'app/elements/form'
import { Card, CardBody, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import Uploader from 'app/components/uploader'

import UploadBannerIcon from 'assets/images/placeholder-img-format.svg'
import Button from 'app/elements/button'
import ROUTES from 'core/router/routes'
import { imageResolver } from 'core/utils'

import './style.scss'
import { useTags } from 'store/tags/hooks'

interface Props {}
const EditVideo: React.FC<Props> = () => {
	const dispatch = useDispatch()
	const dispatchTyped = useTypedDispatch()
	const { params } = useRouteMatch<{ slug: string }>()

	// get video
	const {
		data: video,
		loading: videoLoading,
		errors: videoErrors
	} = useSelector(selectGetVideo)

	// upload banner
	const {
		id: uploadBannerId,
		loading: uploadBannerLoading,
		progress: uploadBannerProgress,
		errors: uploadBannerError
	} = useSelector(selectUploadBanner)

	const { data: categories } = useCategories()
	const { data: tagsData } = useTags()
	const title = videoErrors ? 'ویرایش ویدئو | خطا' : 'ویرایش ویدئو'

	const category = useMemo(() => {
		if (!video) return {}
		const item = categories.find(cat => cat.id === video.category_id)
		return { label: item?.label, value: item?.id }
	}, [video])

	const tags = useMemo(() => {
		if (!video) return {}
		const items = tagsData.filter(itm => video.tags.some(tag => tag.id === itm.id))
		return items.map(itm => ({ label: itm?.label, value: itm?.id }))
	}, [video])

	useEffect(() => {
		dispatch(getVideoStartAction({ slug: params.slug }))
	}, [params])

	// form validations
	const validation = yup.object({
		banner: yup.string().required('ویدئو آپلود نشده است'),
		title: yup
			.string()
			.min(4, 'عنوان ویدئو حداقل باید 4 کاراکتر باشد')
			.required('عنوان ویدئو را قرار دهید'),
		category: yup
			.object()
			.typeError('دسته مرتبط با ویدئو را انتخاب کنید')
			.required('دسته مرتبط با ویدئو را انتخاب کنید'),
		info: yup
			.string()
			.min(20, 'توضیحات ویدئو حداقل باید 20 کاراکتر باشد')
			.required('توضیحات ویدئو باید وارد شود.'),
		tags: yup
			.array()
			.min(1, 'حداقل باید 1 برچسب انتخاب کنید.')
			.max(4, 'حداکثر 4 برچسب میتوانید انتخاب کنید.')
			.required('حداقل باید یک برچسب انتخاب کنید.')
	})

	// form setup
	const form = {
		initialValues: {
			banner: video?.banner_link,
			title: video?.title,
			info: video?.info,
			category: category,
			tags: tags,
			enable_comments: video?.enable_comments
		},
		onSubmit: (value: any) => {
			if (video) {
				const video = {
					...value,
					category: value?.category.value,
					tags: value.tags?.map((tag: any) => tag.value)
				}
				console.log('video', video)
				dispatch(updateVideoStartAction({ slug: video.slug, video }))
			}
		},

		validationSchema: validation
	}

	const uploadBanner = (banner: File) => {
		dispatchTyped(uploadBannerStartAction({ banner }))
	}

	const getVideoUrl = (slug: string) => {
		const protocol = window.location.protocol
		const port = window.location.port
		const host = window.location.hostname

		return `${protocol}//${host}/${port}/${ROUTES.VIDEO.SINGLE(slug).link}`
	}
	const getPreviewImg = (banner: string | null, defualtImage: string) => {
		return !banner ? defualtImage : imageResolver(banner)
	}

	return (
		<PanelLayout title={title}>
			<Card>
				<CardHeader>
					<CardTitle className="h5">{title}</CardTitle>
				</CardHeader>
				<CardBody>
					{/*Start Render Loading */}
					{videoLoading && <div>در حال بارگذاری</div>}
					{/*Finish Content Loading */}

					{/*Start Render Errors */}
					{videoErrors && (
						<p>موردی که می‌خواهید ویرایش کنید پیدا نشد. شاید حذف شده باشد؟</p>
					)}
					{/*Finish Render Errors */}

					{/*Start Render Content */}
					{video && (
						<Formik {...form} validateOnChange={false}>
							{({ resetForm }) => (
								<Form>
									{/* START RENDER CONTENT */}
									<div className="row mb-5">
										{/* START RIGHT CONTENT */}
										<div className="col-12 col-md-7">
											<Input
												name="title"
												id="title"
												label="عنوان"
												placeholder="عنوان ویدئو راوارد نمایید"
											/>

											<SelectBox
												name="category"
												id="select-category"
												label="دسته‌بندی"
												placeholder="یک دسته انتخاب کنید"
												options={categories}
												isClearable
												isSearchable
											/>
											<TextArea
												name="info"
												id="desc"
												label="توضیحات"
												placeholder="توضیحات ویدئو راوارد نمایید"
											/>
											<SelectBox
												name="tags"
												id="select-tags"
												label="برچسب"
												placeholder="برچسب انتخاب کنید"
												options={tagsData}
												closeMenuOnSelect={false}
												isMulti
												isClearable
												isSearchable
											/>
											<div>
												آیا مایل هستید بخش نظرات این پست فعال باشد؟
												<Switch name="enable_comments" className="ms-auto" />
											</div>
										</div>
										{/* FINISH RIGHT CONTENT */}

										{/* START LEFT CONTENT */}
										<div className="col-12 col-md-5">
											<div className="mb-3">
												<span
													style={{
														display: 'block',
														color: '#1e2022',
														fontSize: '0.875rem',
														marginBottom: '0.5rem'
													}}
												>
													تصویر ویدئو
												</span>
												<div className="preview-img">
													<img
														src={getPreviewImg(uploadBannerId, video.banner_link)}
														alt="تصویر ویدئو"
														width="100%"
													/>
												</div>
											</div>
											<Uploader
												name="banner"
												onDropFiles={uploadBanner}
												uploadValue={uploadBannerId}
												uploadProgress={uploadBannerProgress}
												uploadError={uploadBannerError}
												maxSize={2000000}
												accept="image/*"
											>
												<div className="uploader-drag-img">
													<img src={UploadBannerIcon} alt="add file" />
												</div>
												<p className="mb-2">فایل بنر را انتخاب یا اینحا رها کنید</p>
												<small className="text-muted mb-0">
													حداکثر حجم فایل باید 2مگابایت باشد
												</small>
											</Uploader>
											<div className="mb-3">
												<CopyInput
													value={getVideoUrl(video.slug)}
													name="address"
													label="آدرس ویدئو"
													orginalText="کپی در کلیپ بورد"
													successText="کپی شد!"
												/>
											</div>
										</div>
										{/* FINISH LEFT CONTENT */}
									</div>
									{/* FINISH RENDER CONTENT */}

									{/* START ADD NEW VIDEO */}
									<div
										className="position-fixed bottom-0 content-centered-x w-100 z-index-99999 mb-3"
										style={{ maxWidth: '40rem' }}
									>
										<Card className="card-sm bg-dark border-dark mx-2">
											<CardBody>
												<div className="d-flex align-items-center">
													<Button
														type="submit"
														color="primary"
														loader={uploadBannerLoading}
														loaderText="درحال پردازش اطلاعات"
													>
														{1 ? (
															<span>ویرایش ویدئو</span>
														) : (
															<span>ویدئو با موفقیت منتشر شد</span>
														)}
													</Button>
													<Button
														to={{
															pathname: `/${ROUTES.VIDEO.SINGLE(video.slug).link}`
														}}
														color="danger"
														classNames="mx-2"
													>
														مشاهده ویدئو
													</Button>
												</div>
											</CardBody>
										</Card>
									</div>

									{/* END ADD NEW VIDEO */}
								</Form>
							)}
						</Formik>
					)}
					{/*Finish Render Errors */}
				</CardBody>
			</Card>
		</PanelLayout>
	)
}
export default EditVideo
