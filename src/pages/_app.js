import { MapProvider } from 'context'

function App({ Component, pageProps }) {
  return (
    <MapProvider>
      <Component {...pageProps} />
    </MapProvider>
  )
}

export default App
