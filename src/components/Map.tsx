"use client"

import { useRef, useState } from "react";
import ReactMapGL, { ViewState, MapRef } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';


interface Iprops {

}

const Map = ({ className }: { className: string }) => {

  type excludedViesport = Omit<ViewState, 'bearing' | 'pitch' | 'padding'>;
  const mapRef = useRef<MapRef | null>(null);
  const [vieport, setViewport] = useState<excludedViesport>({
    latitude: 43,
    longitude: -79,
    zoom: 10
  });

  return (
    <div className={`${className}`}>
      <ReactMapGL
        initialViewState={vieport}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        mapLib={import('mapbox-gl')}
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
        ref={mapRef}
        minZoom={5}
        maxZoom={15} />
    </div>

  )
}

export default Map