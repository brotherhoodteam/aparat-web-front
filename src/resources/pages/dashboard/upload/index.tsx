import { useFormik } from 'formik'

import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import { Tabs, TabsBody, TabsContent, TabsItem, TabsList } from '../../../components/tabs'
import { SelectBox, Input, TextArea, Switch } from '../../../elements/form'
import PanelLayout from '../../../layouts/panel'

import { uploadFileStartAction } from '../../../../store/video/slice'
import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { useCategories } from '../../../../hooks/use-categories'
import { useTags } from '../../../../hooks/use-tags'
import { useChannelCategories } from '../../../../hooks/use-channel-categories'

import './styles.scss'
import { usePlaylists } from '../../../../hooks/use-playlist'
import Uploader from '../../../components/uploader'
import { useSelector } from 'react-redux'
import { selectProgressUploadingFile } from '../../../../store/video/selectors'

const DashboardUpload: React.FC = () => {
	const dispatchTyped = useTypedDispatch()
	// stream data
	const progress = useSelector(selectProgressUploadingFile)
	const { data: categories, loading: categoriesLoading } = useCategories()
	const { data: channelCategories, loading: channelCategoriesLoading } =
		useChannelCategories()

	const { data: playlists, loading: playlistsLoading } = usePlaylists()

	const { data: tags, loading: tagsLoading } = useTags()

	// form settings
	const form = useFormik({
		initialValues: {
			title: '',
			description: '',
			category: [],
			channel: [],
			tags: [],
			playlist: [],
			comment: false
		},
		onSubmit: (value: any) => {
			// console.log('submit', value)
		}
	})

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
					<Uploader dropHandler={onDrop} percent={progress} />
					<Tabs active="1">
						<TabsList className="mb-5">
							<TabsItem id="1" title="مشخصات ویدئو" />
							<TabsItem id="2" title="تنظیمات پیشرفته" />
						</TabsList>
						<TabsBody>
							<TabsContent id="1">
								<div>
									<form onSubmit={form.handleSubmit}>
										<div className="row">
											<div className="col-12 col-md-6">
												<Input
													name="title"
													id="title"
													label="عنوان"
													placeholder="عنوان ویدئو راوارد نمایید"
													value={form.values.title}
													onChange={form.handleChange}
												/>
											</div>

											<div className="col-12 col-md-6">
												<SelectBox
													name="category"
													id="select-category"
													label="دسته‌بندی"
													placeholder="یک دسته انتخاب کنید"
													options={categories}
													onChange={form.setFieldValue}
													isLoading={categoriesLoading}
													isSearchable
												/>
											</div>
											<div className="col-12">
												<TextArea
													name="description"
													id="desc"
													label="توضیحات"
													placeholder="توضیحات ویدئو راوارد نمایید"
													value={form.values.description}
													onChange={form.handleChange}
												/>
											</div>
											<div className="col-12 col-lg-6">
												<SelectBox
													name="tags"
													id="select-tags"
													label="برچسب"
													placeholder="برچسب انتخاب کنید"
													options={tags}
													onChange={form.setFieldValue}
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
													onChange={form.setFieldValue}
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
													onChange={form.setFieldValue}
													isLoading={playlistsLoading}
													isClearable
													isSearchable
												/>
											</div>
										</div>
									</form>
								</div>
							</TabsContent>
							<TabsContent id="2">
								<div className="row align-items-center">
									<div className="col-6">آیا مایل هستید بخش نظرات این پست فعال باشد؟</div>
									<div className="col-6">
										<Switch
											name="comment"
											value={form.values.comment}
											onChange={form.setFieldValue}
											className="ms-auto"
										/>
									</div>
								</div>
							</TabsContent>
						</TabsBody>
					</Tabs>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardUpload
