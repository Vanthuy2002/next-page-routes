const API_ENDPOINT =
  'https://learn-firebase-223d2-default-rtdb.asia-southeast1.firebasedatabase.app/events.json'

async function callApiAction(endpoint) {
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}

const getAllEvents = async () => {
  const events = await callApiAction(API_ENDPOINT)
  return events
}

const getFeaturedEvents = async () => {
  const events = await callApiAction(
    `${API_ENDPOINT}?orderBy="isFeatured"&startAt=true`
  )
  return events
}

const getDetailEvent = async (id) => {
  const event = await callApiAction(`${API_ENDPOINT}/${id}`)
  return event
}

const getFilteredEvents = async (dateFilter) => {
  const [year, month] = dateFilter
}

export { getAllEvents, getDetailEvent, getFilteredEvents, getFeaturedEvents }
