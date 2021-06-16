import { ErrorMessage, Form, Formik, useFormik } from 'formik'

import { useSelector } from 'react-redux'
import * as yup from 'yup'

import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import { Tabs, TabsBody, TabsContent, TabsItem, TabsList } from '../../../components/tabs'
import { SelectBox, Input, TextArea, Switch } from '../../../elements/form'
import PanelLayout from '../../../layouts/panel'

import { uploadFileStartAction } from '../../../../store/video/slice'
import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { useCategories } from '../../../../hooks/use-categories'
import { useTags } from '../../../../hooks/use-tags'
import { useChannelCategories } from '../../../../hooks/use-channel-categories'

import { usePlaylists } from '../../../../hooks/use-playlist'
import Uploader from '../../../components/uploader'
import Button from '../../../elements/button'
import {
	selectVideoProgressUploading,
	selectVideoData,
	selectVideoError,
	selectVideoLoading
} from '../../../../store/video/selectors'

import './styles.scss'

const DashboardUpload: React.FC = () => {
	const dispatchTyped = useTypedDispatch()

	// upload video
	const videoId = useSelector(selectVideoData)
	const videoUploadLoading = useSelector(selectVideoLoading)
	const progress = useSelector(selectVideoProgressUploading)
	const uploadError = useSelector(selectVideoError)

	// categories
	const { data: categories, loading: categoriesLoading } = useCategories()
	const { data: channelCategories, loading: channelCategoriesLoading } =
		useChannelCategories()

	// playlists
	const { data: playlists, loading: playlistsLoading } = usePlaylists()

	// tags
	const { data: tags, loading: tagsLoading } = useTags()

	// form validations
	const validation = yup.object({
		video: yup.string().required('ویدئو آپلود نشده است'),
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
			video: '',
			title: '',
			info: '',
			category: [],
			channel: [],
			tags: [],
			playlist: [],
			comment: false,
			watermark: false
		},
		onSubmit: (value: any) => {
			console.log('submit', value)
		},
		validationSchema: validation
	}

	// Drop
	const onDrop = (files: File[]) => {
		console.log('onDrop is Start')
		dispatchTyped(uploadFileStartAction({ file: files[0] }))
	}

	return (
		<PanelLayout title="آپلود ویدئو">
			<Card>
				<CardHeader>
					<CardTitle className="h5">آپلود ویدئو</CardTitle>
				</CardHeader>

				<CardBody>
					<div className="mb-4">
						<p>
							به جهت حفظ حقوق مؤلفین و رونق تجاری سینمای کشور، لطفاً از بارگذاری ویدیوهایی
							که دارای حق نشر می باشند و در شبکه نمایش خانگی به فروش می رسند، خودداری
							فرمایید.
						</p>
					</div>
					<Formik {...form} validateOnChange={false}>
						<Form>
							{/* START UPLOAD VIDEO */}
							<Uploader
								name="video"
								dropHandler={onDrop}
								percent={progress}
								value={videoId}
								uploadError={uploadError}
								maxSize={2000000}
								className="mb-5"
							/>
							{/* END UPLOAD VIDEO */}

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
											<div className="col-6">
												آیا مایل هستید بخش نظرات این پست فعال باشد؟
											</div>
											<div className="col-6">
												<Switch name="comment" className="ms-auto" />
											</div>
										</div>
										<div className="row align-items-center mb-4">
											<div className="col-6">نشان کپی رایت برروی ویدئو فعال باشید؟</div>
											<div className="col-6">
												<Switch name="watermark" className="ms-auto" />
											</div>
										</div>
									</TabsContent>
								</TabsBody>
							</Tabs>
							{/* END VIDEO INFORMATION */}

							{/* START ADD NEW VIDEO */}
							<div className="row">
								<div className="col-12 d-flex justify-content-end">
									<Button
										type="submit"
										color="primary"
										loader={videoUploadLoading}
										loaderText="درحال پردازش اطلاعات"
									>
										ثبت ویدئو جدید
									</Button>
								</div>
							</div>
							{/* END ADD NEW VIDEO */}
						</Form>
					</Formik>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardUpload
