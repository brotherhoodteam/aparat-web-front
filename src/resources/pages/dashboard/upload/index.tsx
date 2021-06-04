import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone'
import { useFormik } from 'formik'

import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import { Tabs, TabsBody, TabsContent, TabsItem, TabsList } from '../../../components/tabs'
import { SelectBox, Input, TextArea } from '../../../elements/form'
import PanelLayout from '../../../layouts/panel'

import { uploadFileStartAction } from '../../../../store/video/slice'
import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { useCategories } from '../../../../hooks/use-categories'
import { useTags } from '../../../../hooks/use-tags'
import { useChannelCategories } from '../../../../hooks/use-channel-categories'

import AddFileImage from '../../../../assets/images/add-file.svg'
import './styles.scss'
import { usePlaylists } from '../../../../hooks/use-playlist'

const DashboardUpload: React.FC = () => {
	const dispatchTyped = useTypedDispatch()
	// stream data
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
			playlist: []
		},
		onSubmit: (value: any) => {
			// console.log('submit', value)
		}
	})

	// Drop setting
	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles[0]) {
			dispatchTyped(uploadFileStartAction({ file: acceptedFiles[0] }))
		}
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

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
					<div className="mb-4">
						<div {...getRootProps({ className: 'drag-wrapper' })}>
							<input {...getInputProps()} />
							<div className="drag-img">
								<img src={AddFileImage} alt="add file" />
							</div>
							<p>فایل ویدئو را اینجا رها کرده یا کلیک کنید و فایل را انتخاب کنید</p>
							<small className="text-muted">حداکثر حجم فایل باید 200مگابایت باشد</small>
						</div>
					</div>
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
							<TabsContent id="2"></TabsContent>
						</TabsBody>
					</Tabs>
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardUpload
