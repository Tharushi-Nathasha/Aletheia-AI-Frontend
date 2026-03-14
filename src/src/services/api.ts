
export interface DetectionResult {
  prediction: 'REAL' | 'FAKE'
  confidence: number
}
const API_BASE = "http://127.0.0.1:8000"

export async function detectImage(file: File) {

  const formData = new FormData()
  formData.append("file", file)

  const response = await fetch(`${API_BASE}/detect-image`, {
    method: "POST",
    body: formData
  })

  if (!response.ok) {
    throw new Error("Detection failed")
  }

  return response.json()
}

export async function detectVideo(file: File) {

  const formData = new FormData()
  formData.append("file", file)

  const response = await fetch("http://127.0.0.1:8000/detect-video", {
    method: "POST",
    body: formData
  })

  return response.json()
}