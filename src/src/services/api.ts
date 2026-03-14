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