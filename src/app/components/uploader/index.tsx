import React, { useCallback, useEffect, useState } from 'react'
import { useField } from 'formik'
import { FileRejection, useDropzone } from 'react-dropzone'

import Progress from 'app/elements/progress'
import { ClassName } from 'core/interface/component'
import { Error } from 'core/interface/exception'

import UploadImage from 'assets/images/upload.svg'
import './style.scss'

interface Props {
	name: string
	className?: ClassName
	uploadValue: string | null
	uploadProgress?: number
	uploadError: Error | null
	onDropFiles: (file: File) => void
	accept?: string
	maxSize?: number
}
interface SelectedFile {
	type?: string
	name: string
	size: string
}
interface UploadablePreview {
	url?: string
}
// todo باید اسم فایل درصورت طولانی بودن خلاصه شود

const Uploader: React.FC<Props> = ({
	name,
	className,
	uploadValue,
	uploadProgress,
	uploadError,
	onDropFiles,
	maxSize,
	accept,
	children
}) => {
	const [file, setFile] = useState<SelectedFile>({
		type: undefined,
		name: '',
		size: ''
	})
	const [preview, setPreview] = useState<UploadablePreview>({
		url: undefined
	})
	const [_, meta, helper] = useField(name)

	useEffect(() => {
		if (uploadValue) {
			helper.setValue(uploadValue)
		}
	}, [uploadValue])

	const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
		const selectedFile = accFiles && accFiles[0]

		if (selectedFile) {
			helper.setTouched(true, false)
			helper.setError(false)

			setFile({
				type: selectedFile.type.split('/')[0],
				name: selectedFile.name,
				size: (selectedFile.size / 1000000).toFixed(1)
			})
			uploadPreview(selectedFile)
			onDropFiles(selectedFile)
		} else {
			const errors = rejFiles[0].errors.map(err => err.message).join()
			helper.setTouched(true, false)
			helper.setError(errors)
		}
	}, [])

	const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
		maxSize,
		accept
	})

	const uploadPreview = (file: File) => {
		const reader = new FileReader() // instance of the FileReader
		reader.readAsDataURL(file) // read the local file
		reader.onloadend = function (event) {
			setPreview({
				url: event.target?.result as string
			})
		}
	}

	return (
		<div className={`uploader ${className ? className : ''}`}>
			<div className="uploader-container">
				{/* After Select File */}
				<div {...getRootProps({ className: 'uploader-body' })}>
					{(meta.error || (!acceptedFiles.length && !isDragActive)) && (
						<React.Fragment>
							<input {...getInputProps()} />
							{children}
						</React.Fragment>
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
								<div className="uploader-file-preview mb-3">
									<div className="uploader-file-container">
										{preview && file.type === 'video' && (
											<video src={preview.url} autoPlay muted />
										)}
										{preview && file.type === 'image' && (
											<img src={preview.url} alt={file.name} />
										)}
									</div>
								</div>
								<div className="uploader-file-details">
									<h6 className="mb-1">
										<span className="uploader-file-title">نام : {file.name}</span>
									</h6>
									<div className="uploader-file-size">
										حجم فایل : <strong>{file.size}</strong> <span>MB</span>
									</div>
									<div className="uploader-file-status">
										<small className="text-muted">
											وضعیت : {/* upload success */}
											{uploadValue && 'آپلود با موفقیت انجام شد'}
											{/* upload pending */}
											{!uploadValue && !uploadError && (
												<React.Fragment>
													درحال آپلود
													<span dir="ltr" className="px-1">
														{uploadProgress}%
													</span>
												</React.Fragment>
											)}
											{/* upload Failed */}
											{uploadError && (
												<React.Fragment>
													<span className="text-danger">
														{uploadProgress}% مشکلی پیش آمده
														<span dir="ltr" className="px-1"></span>
													</span>
												</React.Fragment>
											)}
										</small>
									</div>
								</div>
							</div>

							{uploadProgress && (
								<div className="uploader-progress">
									<Progress
										precent={uploadProgress}
										isCompleted={!!uploadValue}
										isFailed={!!uploadError}
									/>
								</div>
							)}
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
