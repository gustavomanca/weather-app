import Head from 'next/head'

import Map from 'components/Map'

import { useMap } from 'hooks'

export default function Home() {
  const { coords } = useMap()

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <>
          <button type="button">search</button>

          <div>
            <p>{coords.lat}</p>
            <p>{coords.lng}</p>
          </div>

          <Map />
        </>
      </main>
    </div>
  )
}
