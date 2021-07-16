import { createContext, useState } from 'react'

const DEFAULT_COORDS = { lat: -23.589963056039966, lng: -48.039269778377765 }

export const MapContext = createContext()

export function MapProvider({ children }) {
  const [coords, setCoords] = useState(DEFAULT_COORDS)

  return (
    <MapContext.Provider
      value={{
        coords,
        setCoords
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
