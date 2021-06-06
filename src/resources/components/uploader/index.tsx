import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import AddFileImage from '../../../assets/images/add-file.svg'
import UploadImage from '../../../assets/images/upload.svg'
import FileImage from '../../../assets/images/img6.jpg'
import './style.scss'
import Progress from '../../elements/progress'

interface Props {
	dropHandler: (files: File[]) => void
}

const Uploader: React.FC<Props> = ({ dropHandler }) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		dropHandler(acceptedFiles)
	}, [])
	const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
		onDrop
	})

	return (
		<div className="uploader">
			<div {...getRootProps({ className: 'uploader-body mb-4' })}>
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
						<div className="uploader-file-img">
							<img src={FileImage} alt="" />
						</div>
						<div className="uploader-file-details">
							<h6 className="mb-1">
								<span className="uploader-file-title">light-mono.png</span>
							</h6>
							<div className="uploader-file-size" dir="ltr">
								<strong>2.1</strong> <span>KB</span>
							</div>
							<div className="uploader-file-status">
								<small className="text-muted">
									درحال آپلود
									<span dir="ltr" className="px-1">
										60%
									</span>
								</small>
							</div>
						</div>
						<div className="uploader-progress">
							<Progress precent={40} />
						</div>
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Uploader
