import { useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Marker from './Marker'
import { useMap } from 'hooks'

const layerConfig = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}

const handleIcon = () => {
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  })
}

const Map = () => {
  const { coords } = useMap()

  useEffect(() => {
    handleIcon()
  }, [])

  return (
    <MapContainer
      center={coords}
      zoom={12}
      style={{ width: '100%', height: '320px' }}
    >
      <TileLayer {...layerConfig} />
      <Marker />
    </MapContainer>
  )
}

export default Map
