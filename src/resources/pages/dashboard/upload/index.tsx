import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useDropzone } from 'react-dropzone'
import { useFormik } from 'formik'

import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import { Tabs, TabsBody, TabsContent, TabsItem, TabsList } from '../../../components/tabs'
import { SelectBox, Input, TextArea } from '../../../elements/form'
import PanelLayout from '../../../layouts/panel'

import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { fileUploadStartAction } from '../../../../store/video/slice'
import { selectCategoryList } from '../../../../store/category/selectors'

import AddFileImage from '../../../../assets/images/add-file.svg'
import './styles.scss'

const DashboardUpload: React.FC = () => {
	const dispatch = useTypedDispatch()
	const category = useSelector(selectCategoryList)

	// form settings
	const form = useFormik({
		initialValues: {
			title: '',
			category: '',
			description: ''
		},
		onSubmit: (value: any) => {
			console.log('submit', value)
		}
	})

	// Drop setting
	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles[0]) {
			dispatch(fileUploadStartAction({ file: acceptedFiles[0] }))
		}
	}, [])
	const { getRootProps, getInputProps } = useDropzone({ onDrop })

	return (
		<>
			{/* HEADER */}
			<Helmet>
				<meta charSet="utf-8" />
				<title>Upload New Video</title>
			</Helmet>
			<PanelLayout>
				<Card>
					<CardHeader>
						<CardTitle className="h5">آپلود ویدئو</CardTitle>
					</CardHeader>
					<CardBody>
						<div className="mb-4">
							<p>
								به جهت حفظ حقوق مؤلفین و رونق تجاری سینمای کشور، لطفاً از بارگذاری
								ویدیوهایی که دارای حق نشر می باشند و در شبکه نمایش خانگی به فروش می رسند،
								خودداری فرمایید.
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
								<TabsItem id="1" title="مشخصات" />
								<TabsItem id="2" title="تیم" />
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
														label="عنوان ویدئو"
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
														options={category}
														placeholder="یک دسته انتخاب کنید"
														value={form.values.category}
														onChange={form.setFieldValue}
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
												<div className="col-12 col-lg-6"></div>
											</div>
										</form>
									</div>
								</TabsContent>
								<TabsContent id="2">
									<Card>
										<CardHeader>
											<CardTitle>تب تیم</CardTitle>
										</CardHeader>
										<CardBody>
											از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر
											متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد
											آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی
											می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
										</CardBody>
									</Card>
								</TabsContent>
							</TabsBody>
						</Tabs>
					</CardBody>
				</Card>
			</PanelLayout>
		</>
	)
}

export default DashboardUpload
