import { api } from 'services'

export async function fetchCitiesByCoords({ coords }) {
  const { lat, lng } = coords

  try {
    const { data } = await api.get(
      `find?lat=${lat}&lon=${lng}&cnt=15&units=metric`
    )

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
