import { useCallback, useEffect, useMemo, useState } from 'react'
import { useField, ErrorMessage } from 'formik'
import { useDropzone } from 'react-dropzone'

import Progress from '../../elements/progress'
import { ClassName } from '../../../interface/component'

import AddFileImage from '../../../assets/images/add-file.svg'
import UploadImage from '../../../assets/images/upload.svg'
import FileImage from '../../../assets/images/img6.jpg'
import './style.scss'
import { ErrorType } from '../../../interface/exception'

interface Props {
	name: string
	dropHandler: (files: File[]) => void
	percent: number
	className: ClassName
	value: string | null
	uploadError: ErrorType | null
	maxSize: number
}
interface State {
	name: string
	size: string
}
// todo باید متن های کامپوننت با پراچس قرار گیرد
// todo باید اسم فایل درصورت طولانی بودن خلاصه شود

const Uploader: React.FC<Props> = ({
	name,
	dropHandler,
	percent,
	className,
	maxSize,
	value,
	uploadError
}) => {
	// input settings
	const [field, meta, helper] = useField(name)

	const [file, setFile] = useState<State>({
		name: '',
		size: ''
	})

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const selectedFile = acceptedFiles && acceptedFiles[0]
		const name = selectedFile.name
		const size = (selectedFile.size / 1000000).toFixed(1)

		if (selectedFile) {
			// set touched
			helper.setTouched(true, false)

			if (selectedFile.size <= maxSize) {
				// set video details
				setFile({
					name,
					size
				})
				// remove error
				helper.setError(false)
				// start upload
				dropHandler(acceptedFiles)
			} else {
				helper.setError('حجم فایل بزرگ تر از 2 مگابایت است')
			}
		}
	}, [])
	const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
		onDrop
	})

	useEffect(() => {
		if (value) {
			helper.setValue(value)
		}
	}, [value])

	const renderUploadingStatus = () => (
		<small className="text-muted">
			{/* upload success */}
			{value && 'آپلود با موفقیت انجام شد'}

			{/* upload pending */}
			{!value && !uploadError && (
				<>
					درحال آپلود
					<span dir="ltr" className="px-1">
						{percent}%
					</span>
				</>
			)}

			{/* upload Failed */}
			{uploadError && (
				<>
					<span className="text-danger">
						مشکلی پیش آمده
						<span dir="ltr" className="px-1">
							{percent}%
						</span>
					</span>
				</>
			)}
		</small>
	)
	return (
		<div className={`uploader ${className ? className : ''}`}>
			<div className="uploader-container">
				{/* After Select File */}
				<div {...getRootProps({ className: 'uploader-body' })}>
					{(meta.error || (!acceptedFiles.length && !isDragActive)) && (
						<>
							<input {...getInputProps()} />
							<div className="uploader-drag-img">
								<img src={AddFileImage} alt="add file" />
							</div>
							<p>فایل ویدئو را اینجا رها کرده یا کلیک کنید و فایل را انتخاب کنید</p>
							<small className="text-muted">حداکثر حجم فایل باید 2مگابایت باشد</small>
						</>
					)}

					{/* onSelect File */}
					{!meta.error && isDragActive ? (
						<div>
							<div className="uploader-drag-img">
								<img src={UploadImage} alt="add file" />
							</div>
							<p>فایل را رها کنید</p>
						</div>
					) : null}

					{/* After uploaing File */}
					{!meta.error && acceptedFiles.length ? (
						<div className="uploader-drop">
							<div className="uploader-file">
								<div className="uploader-file-img">
									<img src={FileImage} alt="" />
								</div>
								<div className="uploader-file-details">
									<h6 className="mb-1">
										<span className="uploader-file-title">{file.name}</span>
									</h6>
									<div className="uploader-file-size" dir="ltr">
										<strong>{file.size}</strong> <span>MB</span>
									</div>
									<div className="uploader-file-status">{renderUploadingStatus()}</div>
								</div>
							</div>
							<div className="uploader-progress">
								<Progress
									precent={percent}
									isCompleted={!!value}
									isFailed={!!uploadError}
								/>
							</div>
						</div>
					) : null}
				</div>
				{/* Error */}
			</div>
			<div className="uploader-error">
				{meta.error && meta.touched && <p className="text-danger mb-0">{meta.error}</p>}
				{uploadError && <p className="text-danger mb-0">{uploadError?.message}</p>}
			</div>
		</div>
	)
}

export default Uploader
