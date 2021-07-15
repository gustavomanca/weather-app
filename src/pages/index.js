import Head from 'next/head'

import Map from '../components/Map'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Map />
      </main>
    </div>
  )
}
