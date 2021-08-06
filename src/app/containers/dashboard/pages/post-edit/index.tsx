import { useMemo, useEffect } from 'react'
import { Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import * as yup from 'yup'

import useTypedDispatch from 'lib/hooks/use-typed-dispatch'
import {
	fetchVideoRequest,
	updatePostRequest,
	uploadBannerRequest
} from 'store/post/slice'
import { useCategories } from 'store/categories/hooks'

import { Input, SelectBox, Textarea, Switch, CopyText } from 'app/elements/form'
import { Card, CardBody, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import Uploader from 'app/components/uploader'

import UploadBannerIcon from 'static/images/placeholder.svg'
import Button from 'app/elements/button'
import ROUTES from 'core/router/routes'
import { imageResolver } from 'lib/utils'
import { useTagList } from 'store/tags/hooks'

import './style.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import NoData from 'app/components/no-data'
import EditPostLoader from 'app/components/skeleton-loader/edit-post'
import { Tag } from 'lib/types/tag'
import { useDraftPost, useUploadBanner } from 'store/post/hooks'

interface Props {}
const DashboardPostEdit: React.FC<Props> = () => {
	const dispatch = useDispatch()
	const dispatchTyped = useTypedDispatch()
	const { params } = useRouteMatch<{ slug: string }>()

	// get video
	const { data: video, loading: videoLoading, errors: videoErrors } = useDraftPost()

	// upload banner
	const {
		id: uploadBannerId,
		loading: uploadBannerLoading,
		progress: uploadBannerProgress,
		errors: uploadBannerError
	} = useUploadBanner()

	const { data: categories } = useCategories()
	const { data: tagsData } = useTagList()
	const title = videoErrors ? 'ویرایش ویدئو | خطا' : 'ویرایش ویدئو'

	const category = useMemo(() => {
		if (!video) return {}
		return categories.find(cat => cat.id === video.category_id)
	}, [video])

	const tags = useMemo(() => {
		if (!video) return {}
		return tagsData.filter(itm => video.tags.some((tag: Tag) => tag.id === itm.id))
	}, [video])

	useEffect(() => {
		dispatch(fetchVideoRequest({ slug: params.slug }))
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
			banner: video?.banner,
			title: video?.title,
			info: video?.info,
			category: category,
			tags: tags,
			enable_comments: video?.enable_comments
		},
		onSubmit: (value: any) => {
			console.log('value', value)
			console.log('video', video)
			if (video) {
				const data = {
					...value,
					category: value.category.id,
					tags: value.tags.map((tag: any) => tag.id)
				}

				if (video.banner === value.banner) {
					delete data['banner']
				}
				dispatch(updatePostRequest({ slug: video.slug, video: data }))
			}
		},

		validationSchema: validation
	}

	const uploadBanner = (banner: File) => {
		dispatchTyped(uploadBannerRequest({ banner }))
	}

	const fetchVideoUrl = (slug: string) => {
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
					{/*Start Render Errors */}
					{videoErrors && (
						<NoData className="align-items-center justify-content-center">
							<p className="mb-3">
								موردی که می‌خواهید ویرایش کنید پیدا نشد. شاید حذف شده باشد؟
							</p>
							<Button
								color="primary"
								variant="soft"
								to={{ pathname: ROUTES.DASHBOARD.OVERVIEW().link }}
							>
								رفتن به داشتبورد
							</Button>
						</NoData>
					)}
					{/*Finish Render Errors */}

					{/*Start Render Loading */}
					{videoLoading && <EditPostLoader />}
					{/*Finish Content Loading */}

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
											<Textarea
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
													<LazyLoadImage
														effect="blur"
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
													<LazyLoadImage
														effect="blur"
														src={UploadBannerIcon}
														alt="add file"
													/>
												</div>
												<p className="mb-2">فایل بنر را انتخاب یا اینحا رها کنید</p>
												<small className="text-muted mb-0">
													حداکثر حجم فایل باید 2مگابایت باشد
												</small>
											</Uploader>
											<div className="mb-3">
												<CopyText
													value={fetchVideoUrl(video.slug)}
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
export default DashboardPostEdit
function selectCreatePost(selectCreatePost: any): {
	data: any
	loading: any
	errors: any
} {
	throw new Error('Function not implemented.')
}
