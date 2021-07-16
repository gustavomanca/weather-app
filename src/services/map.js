const baseUrl = 'http://api.openweathermap.org/data/2.5/find?'

export async function fetchCities({ coords }) {
  const { lat, lng } = coords

  try {
    const response = await fetch(
      `${baseUrl}lat=${lat}&lon=${lng}&cnt=15&units=metric&APPID=f63860b69f50e334aedc632d1aa5a98f`
    )
    const data = await response.json()

    const sanitized = data.list.map(({ id, name, main }) => ({
      id,
      name,
      maxTemp: parseInt(main.temp_max),
      minTemp: parseInt(main.temp_min)
    }))

    return sanitized
  } catch (err) {
    throw new Error(err)
  }
}
