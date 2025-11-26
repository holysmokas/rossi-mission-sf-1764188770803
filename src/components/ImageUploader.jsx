import { useState } from 'react'

function ImageUploader({ onImageUploaded, currentImage }) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(currentImage || null)
  const [error, setError] = useState(null)

  const API_URL = 'https://api.holysmokas.com'

  const handleFileSelect = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target.result)
    reader.readAsDataURL(file)

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('image', file)
      formData.append('userId', localStorage.getItem('holySmokas_userId') || '')
      formData.append('projectId', localStorage.getItem('holySmokas_projectId') || '')
      formData.append('folder', 'products')

      const response = await fetch(`${API_URL}/api/drive/upload`, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        onImageUploaded(data.url)
        setPreview(data.url)
      } else if (data.needsConnection) {
        setError('Please connect Google Drive in your HolySmokas dashboard first')
      } else {
        setError(data.error || 'Upload failed')
      }
    } catch (err) {
      console.error('Upload error:', err)
      setError('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Product Image
      </label>
      
      {preview && (
        <div className="relative w-40 h-40">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg border"
          />
          <button
            type="button"
            onClick={() => { setPreview(null); onImageUploaded(''); }}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>
        </div>
      )}

      <div className="flex items-center gap-4">
        <label className={
          `cursor-pointer px-4 py-2 rounded-lg border-2 border-dashed 
          ${uploading ? 'bg-gray-100 cursor-not-allowed' : 'hover:border-blue-500 hover:bg-blue-50'}
          transition`
        }>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={uploading}
            className="hidden"
          />
          {uploading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Uploading...
            </span>
          ) : (
            <span>📁 Choose Image</span>
          )}
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <p className="text-xs text-gray-500">
        Images are stored in your Google Drive. Max size: 5MB.
      </p>
    </div>
  )
}

export default ImageUploader