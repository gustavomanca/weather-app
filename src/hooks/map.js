import { useContext } from 'react'

import { MapContext } from 'context'

export default function useMap() {
  const { coords, setCoords } = useContext(MapContext)

  return {
    coords,
    setCoords
  }
}
