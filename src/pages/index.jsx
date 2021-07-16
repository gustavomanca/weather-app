import Head from 'next/head'
import { useState } from 'react'

import { useMap } from 'hooks'
import { fetchCities } from 'services'

import Map from 'components/Map'

export default function Home() {
  const { coords } = useMap()
  const [cities, setCities] = useState([])

  async function onSearch() {
    const cities = await fetchCities({ coords })
    setCities(cities)
  }

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <button type="button" onClick={() => onSearch()}>
            search
          </button>
          <Map />

          <ul>
            {cities.length > 0 &&
              cities.map(({ id, name, maxTemp, minTemp }) => (
                <p key={id}>
                  <strong>{name}</strong> <br />
                  Min: {minTemp}ºC <br />
                  Max: {maxTemp}ºC
                </p>
              ))}
          </ul>
        </>
      </main>
    </div>
  )
}
