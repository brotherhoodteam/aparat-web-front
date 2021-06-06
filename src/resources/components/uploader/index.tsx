import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import AddFileImage from '../../../assets/images/add-file.svg'
import UploadImage from '../../../assets/images/upload.svg'
import FileImage from '../../../assets/images/img6.jpg'
import './style.scss'
import Progress from '../../elements/progress'

interface Props {
	dropHandler: (files: File[]) => void
	percent: number
}

// todo باید متن های کامپوننت با پراچس قرار گیرد
// todo باید اسم فایل درصورت طولانی بودن خلاصه شود

const Uploader: React.FC<Props> = ({ dropHandler, percent }) => {
	const [file, setFile] = useState({
		name: '',
		size: ''
	})

	const onDrop = useCallback((acceptedFiles: File[]) => {
		dropHandler(acceptedFiles)
	}, [])
	const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
		onDrop
	})
	useEffect(() => {
		const selectedFile = acceptedFiles && acceptedFiles[0]

		if (selectedFile) {
			setFile({
				name: selectedFile.name,
				size: (selectedFile.size / 1000000).toFixed(1)
			})
		}
	}, [acceptedFiles])

	const isCompleted = useMemo(() => percent === 100, [percent])
	return (
		<div className="uploader">
			<div {...getRootProps({ className: 'uploader-body' })}>
				{!acceptedFiles.length && !isDragActive && (
					<>
						<input {...getInputProps()} />
						<div className="uploader-drag-img">
							<img src={AddFileImage} alt="add file" />
						</div>
						<p>فایل ویدئو را اینجا رها کرده یا کلیک کنید و فایل را انتخاب کنید</p>
						<small className="text-muted">حداکثر حجم فایل باید 200مگابایت باشد</small>
					</>
				)}

				{isDragActive ? (
					<div>
						<div className="uploader-drag-img">
							<img src={UploadImage} alt="add file" />
						</div>
						<p>فایل را رها کنید</p>
					</div>
				) : null}
				{acceptedFiles.length ? (
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
								<div className="uploader-file-status">
									<small className="text-muted">
										{!isCompleted ? (
											<>
												درحال آپلود
												<span dir="ltr" className="px-1">
													{percent}%
												</span>
											</>
										) : (
											'آپلود با موفقیت انجام شد'
										)}
									</small>
								</div>
							</div>
						</div>
						<div className="uploader-progress">
							<Progress precent={percent} isCompleted={isCompleted} />
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Uploader
