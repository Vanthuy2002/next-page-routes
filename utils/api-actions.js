export async function postFeedback(payload) {
  const res = await fetch('/api/feedback', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return data
}

export async function getAllFeeback() {
  const res = await fetch('http://localhost:3000/api/feedback', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  return data
}
