import React from 'react'
import { Marker as MarkerProvider, Popup, useMapEvent } from 'react-leaflet'

import { useMap } from 'hooks'

const Marker = () => {
  const { coords, setCoords } = useMap()

  useMapEvent('click', ({ latlng }) => {
    setCoords(latlng)
  })

  return (
    <MarkerProvider position={coords}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </MarkerProvider>
  )
}

export default Marker
