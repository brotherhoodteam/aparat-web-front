import { useCallback } from 'react'
import { Helmet } from 'react-helmet'
import { useDropzone } from 'react-dropzone'

import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import { Tabs, TabsBody, TabsContent, TabsItem, TabsList } from '../../../components/tabs'
import PanelLayout from '../../../layouts/panel'
import { SelectBox } from '../../../elements/form'

import useTypedDispatch from '../../../../hooks/use-typed-dispatch'
import { fileUploadStartAction } from '../../../../store/video/slice'

import AddFileImage from '../../../../assets/images/add-file.svg'

import './styles.scss'
import { useSelector } from 'react-redux'
import { selectCategoryList } from '../../../../store/category/selectors'

const DashboardUpload: React.FC = () => {
	const dispatch = useTypedDispatch()
	const category = useSelector(selectCategoryList)
	const onDrop = useCallback((acceptedFiles: File[]) => {
		if (acceptedFiles[0]) {
			console.log('acceptedFiles[0]', acceptedFiles[0])
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
						<Tabs active="2">
							<TabsList className="mb-5">
								<TabsItem id="1" title="پروفایل" />
								<TabsItem id="2" title="تیم" />
								<TabsItem id="3" title="پروژه‌ها" />
								<TabsItem id="4" title="ارتباطات" />
							</TabsList>
							<TabsBody>
								<TabsContent id="1">
									<Card>
										<CardHeader>
											<CardTitle>تب پروفایل</CardTitle>
										</CardHeader>
										<CardBody>
											از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر
											متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد
											آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی
											می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
										</CardBody>
									</Card>
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
								<TabsContent id="3">
									<Card>
										<CardHeader>
											<CardTitle>تب پروژه‌ها</CardTitle>
										</CardHeader>
										<CardBody>
											از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر
											متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد
											آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی
											می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
										</CardBody>
									</Card>
								</TabsContent>
								<TabsContent id="4">
									<Card>
										<CardHeader>
											<CardTitle>تب ارتباطات</CardTitle>
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
						<div className="row">
							<div className="col-6">
								<SelectBox
									id="selectOp"
									name="list"
									label="دسته‌بندی"
									options={category}
									placeholder="یک دسته انتخاب کنید"
								/>
							</div>
							<div className="col-6"></div>
						</div>
					</CardBody>
				</Card>
			</PanelLayout>
		</>
	)
}

export default DashboardUpload
