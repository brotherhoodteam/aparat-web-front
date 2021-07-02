import React, { useEffect, useRef } from 'react'
import { Form, Formik, FormikValues } from 'formik'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import { Tabs, TabsBody, TabsContent, TabsItem, TabsList } from '../../../components/tabs'
import { SelectBox, Input, TextArea, Switch } from '../../../elements/form'
import PanelLayout from '../../../layouts/panel'

import {
	publishVideoStart,
	uploadBannerStartAction,
	uploadVideoStartAction
} from '../../../../store/video/slice'
import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { useCategories } from '../../../../hooks/use-categories'
import { useTags } from '../../../../hooks/use-tags'
import { useChannelCategories } from '../../../../hooks/use-channel-categories'

import { usePlaylists } from '../../../../hooks/use-playlist'
import Uploader from '../../../components/uploader'
import Button from '../../../elements/button'
import {
	selectVideoUploadProgress,
	selectVideoData,
	selectVideoError,
	selectVideoLoading,
	selectBannerData,
	selectBannerLoading,
	selectBannerUploadProgress,
	selectBannerError,
	selectPublishData,
	selectPublishLoading
} from '../../../../store/video/selectors'

import UploadVideoIcon from '../../../../assets/images/video-file.svg'
import UploadBannerIcon from '../../../../assets/images/placeholder-img-format.svg'
import {
	PublishResponse,
	PublishResponseData,
	PublishVideo
} from '../../../../store/video/interface'
import './styles.scss'

const DashboardUpload: React.FC = () => {
	const panelRef = useRef<HTMLDivElement>(null)
	const dispatchTyped = useTypedDispatch()
	// upload video
	const videoId = useSelector(selectVideoData)
	const videoUploadLoading = useSelector(selectVideoLoading)
	const videoUploadProgress = useSelector(selectVideoUploadProgress)
	const videoUploadError = useSelector(selectVideoError)

	// upload banner
	const bannerId = useSelector(selectBannerData)
	const bannerUploadLoading = useSelector(selectBannerLoading)
	const bannerUploadProgress = useSelector(selectBannerUploadProgress)
	const bannerUploadError = useSelector(selectBannerError)

	// published video
	const videoData: PublishResponse | null = useSelector(selectPublishData)
	const publishLoading = useSelector(selectPublishLoading)

	// categories
	const { data: categories, loading: categoriesLoading } = useCategories()
	const { data: channelCategories, loading: channelCategoriesLoading } =
		useChannelCategories()

	// playlists
	const { data: playlists, loading: playlistsLoading } = usePlaylists()

	// tags
	const { data: tags, loading: tagsLoading } = useTags()

	useEffect(() => {
		if (videoData) {
			scrollTop()
		}
	}, [videoData])

	// form validations
	const validation = yup.object({
		video_id: yup.string().required('ویدئو آپلود نشده است'),
		banner_id: yup.string().required('تصویر آپلود نشده است'),
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
			.required('حداقل باید یک برچسب انتخاب کنید.'),
		channel: yup
			.object()
			.typeError('دسته‌ بندی کانال را انتخاب کنید')
			.required('دسته‌ بندی کانال را انتخاب کنید'),
		playlist: yup
			.object()
			.typeError('لیست پخش مرتبط با ویدئو را انتخاب کنید')
			.required('لیست پخش مرتبط با ویدئو را انتخاب کنید')
	})

	// form setup
	const form = {
		initialValues: {
			video_id: '',
			banner_id: '',
			title: '',
			info: '',
			category: { label: 'sport', value: 1 },
			channel: null,
			tags: [],
			playlist: null,
			enable_comments: false,
			enable_watermark: false
		},
		onSubmit: (value: any) => {
			const banner = value.banner_id.split('/')
			const bannerId = banner[banner.length - 1]
			const video: PublishVideo = {
				video_id: value.video_id,
				banner: bannerId,
				title: value.title,
				info: value.info,
				category: value.category.id,
				channel: value.channel.id,
				tags: value.tags.map((tag: any) => tag.id),
				playlist: null,
				enable_comments: value.enable_comments,
				enable_watermark: value.enable_watermark,
				publish_at: new Date().getDate().toString()
			}
			console.log('before publish', video)
			dispatchTyped(publishVideoStart({ video }))
		},
		validationSchema: validation
	}

	// Upload video and banner
	const uploadVideo = (video: File) => {
		dispatchTyped(uploadVideoStartAction({ video }))
	}
	const uploadBanner = (banner: File) => {
		dispatchTyped(uploadBannerStartAction({ banner }))
	}
	const scrollTop = () => {
		if (!panelRef.current) return

		panelRef.current.scrollIntoView({
			behavior: 'smooth',
			inline: 'nearest'
		})
	}
	console.log('videoData', videoData)
	return (
		<PanelLayout title="آپلود ویدئو">
			<div ref={panelRef}>
				<Card>
					<CardHeader>
						<CardTitle className="h5">آپلود ویدئو</CardTitle>
					</CardHeader>

					<CardBody>
						<Formik {...form} validateOnChange={false}>
							{({ resetForm }) => (
								<Form>
									{!videoData ? (
										<React.Fragment>
											<div className="mb-4">
												<p>
													به جهت حفظ حقوق مؤلفین و رونق تجاری سینمای کشور، لطفاً از
													بارگذاری ویدیوهایی که دارای حق نشر می باشند و در شبکه نمایش
													خانگی به فروش می رسند، خودداری فرمایید.
												</p>
											</div>
											<div className="row mb-3">
												{/* START UPLOAD VIDEO */}
												<div className="col-12 col-xl-6">
													<Uploader
														name="video_id"
														onDropFiles={uploadVideo}
														uploadValue={videoId}
														uploadProgress={videoUploadProgress}
														uploadError={videoUploadError}
														maxSize={2000000}
														accept="video/*"
													>
														<div className="uploader-drag-img">
															<img src={UploadVideoIcon} alt="add file" />
														</div>
														<p className="mb-2">فایل ویدئو را انتخاب یا اینحا رها کنید</p>
														<small className="text-muted">
															حداکثر حجم فایل باید 2مگابایت باشد
														</small>
													</Uploader>
												</div>
												{/* END UPLOAD VIDEO */}

												{/* START UPLOAD VIDEO */}
												<div className="col-12 col-xl-6">
													<Uploader
														name="banner_id"
														onDropFiles={uploadBanner}
														uploadValue={bannerId}
														uploadProgress={bannerUploadProgress}
														uploadError={bannerUploadError}
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
												</div>
												{/* END UPLOAD VIDEO */}
											</div>

											{/* START VIDEO INFORMATION */}
											<Tabs active="1" className="mb-5">
												<TabsList className="mb-5">
													<TabsItem id="1" title="مشخصات ویدئو" />
													<TabsItem id="2" title="تنظیمات پیشرفته" />
												</TabsList>
												<TabsBody>
													<TabsContent id="1">
														<div>
															<div className="row">
																<div className="col-12 col-md-6">
																	<Input
																		name="title"
																		id="title"
																		label="عنوان"
																		placeholder="عنوان ویدئو راوارد نمایید"
																	/>
																</div>

																<div className="col-12 col-md-6">
																	<SelectBox
																		name="category"
																		id="select-category"
																		label="دسته‌بندی"
																		placeholder="یک دسته انتخاب کنید"
																		options={categories}
																		isLoading={categoriesLoading}
																		isClearable
																		isSearchable
																	/>
																</div>
																<div className="col-12">
																	<TextArea
																		name="info"
																		id="desc"
																		label="توضیحات"
																		placeholder="توضیحات ویدئو راوارد نمایید"
																	/>
																</div>
																<div className="col-12 col-lg-6">
																	<SelectBox
																		name="tags"
																		id="select-tags"
																		label="برچسب"
																		placeholder="برچسب انتخاب کنید"
																		options={tags}
																		closeMenuOnSelect={false}
																		isLoading={tagsLoading}
																		isMulti
																		isClearable
																		isSearchable
																	/>
																</div>
																<div className="col-12 col-lg-6">
																	<SelectBox
																		name="channel"
																		id="channel"
																		label="دسته‌بندی کانال"
																		placeholder="یک دسته انتخاب کنید"
																		options={channelCategories}
																		isLoading={channelCategoriesLoading}
																		isClearable
																		isSearchable
																	/>
																</div>
																<div className="col-12 col-lg-6">
																	<SelectBox
																		name="playlist"
																		id="playlist"
																		label="لیست پخش"
																		placeholder="یک لیست پخش انتخاب کنید"
																		options={playlists}
																		isLoading={playlistsLoading}
																		isClearable
																		isSearchable
																	/>
																</div>
															</div>
														</div>
													</TabsContent>
													<TabsContent id="2">
														<div className="row align-items-center mb-4">
															<div className="col-12 col-xl-6">
																آیا مایل هستید بخش نظرات این پست فعال باشد؟
															</div>
															<div className="col-12 col-xl-6">
																<Switch name="enable_comments" className="ms-auto" />
															</div>
														</div>
														<div className="row align-items-center mb-4">
															<div className="col-12 col-xl-6">
																نشان کپی رایت برروی ویدئو فعال باشید؟
															</div>
															<div className="col-12 col-xl-6">
																<Switch name="enable_watermark" className="ms-auto" />
															</div>
														</div>
													</TabsContent>
												</TabsBody>
											</Tabs>
											{/* END VIDEO INFORMATION */}
										</React.Fragment>
									) : (
										<Card className="shadow-none">
											<CardBody>
												<div className="row">
													<div className="col-sm-5 col-lg-3 mb-3 mb-sm-0">
														<img
															className="img-fluid rounded-lg w-100"
															src={videoData.banner_link}
															alt={videoData.title}
														/>
													</div>
													<div className="col-sm-7 col-lg-9">
														<div className="row">
															<div className="col-lg-9 mb-2 mb-lg-0">
																<h5 className="text-dark text-hover-primary">
																	{videoData.title}
																</h5>
																<span className="d-block text-muted text-primary text-lh-sm mb-0">
																	{videoData.info}
																</span>
															</div>

															<div className="col-auto mr-auto">
																<div className="text-right">
																	<small className="d-block text-muted">طول ویدئو</small>
																	<span className="d-block h5 text-primary text-lh-sm mb-0">
																		{videoData.duration}
																	</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
									)}
									{/* START ADD NEW VIDEO */}
									<div
										className="position-fixed bottom-0 content-centered-x w-100 z-index-99 mb-3"
										style={{ maxWidth: '40rem' }}
									>
										<Card className="card-sm bg-dark border-dark mx-2">
											<CardBody>
												<div className="row justify-content-center justify-content-sm-between">
													<div className="col">
														<Button
															type="submit"
															color="primary"
															loader={
																publishLoading ||
																videoUploadLoading ||
																bannerUploadLoading
															}
															loaderText="درحال پردازش اطلاعات"
															disanled={!!videoData}
														>
															{!videoData ? (
																<span>انتشار ویدئو</span>
															) : (
																<span>ویدئو با موفقیت منتشر شد</span>
															)}
														</Button>
														{!videoData && (
															<Button
																type="button"
																variant="ghost"
																color="light"
																classNames="ms-2"
																disanled={true}
															>
																انتشار در زمانی دیگر
															</Button>
														)}
														{videoData && (
															<Button
																type="button"
																variant="ghost"
																color="light"
																classNames="ms-2"
															>
																ارسال ویدئو جدید
															</Button>
														)}
													</div>
													<div className="col-auto">
														{/* {!videoData && (
															<Button
																type="button"
																variant="ghost"
																color="danger"
																classNames="ms-2"
																disanled={!!videoData}
																onClick={() => {
																	resetForm({})
																}}
															>
																پاک کردن فرم
															</Button>
														)} */}
													</div>
												</div>
											</CardBody>
										</Card>
									</div>

									{/* END ADD NEW VIDEO */}
								</Form>
							)}
						</Formik>
					</CardBody>
				</Card>
			</div>
		</PanelLayout>
	)
}

export default DashboardUpload
