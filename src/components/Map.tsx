"use client"

import { useRef, useState } from "react";
import ReactMapGL, { ViewState, MapRef, NavigationControl, Marker, CircleLayer, Source, Layer, FillLayer } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from "next/image";
import { FeatureCollection } from "geojson";


interface Iprops {

}

const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    { type: 'Feature', geometry: { type: 'Point', coordinates: [-122.4, 37.8] } }
  ]
};

const parkLayer: FillLayer = {
  id: 'landuse_park',
  type: 'fill',
  source: 'mapbox',
  'source-layer': 'landuse',
  filter: ['==', 'class', 'park'],
  paint: {
    'fill-color': '#4E3FC8'
  }
};

const Map = ({ className }: { className: string }) => {

  type excludedViewState = Omit<ViewState, 'padding'>;
  const mapRef = useRef<MapRef | null>(null);
  const [viewport, setViewport] = useState<excludedViewState>({
    latitude: 37.8,
    longitude: -122.4,
    // zoom: 10
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,

  });


  // console.log(mapRef);

  return (
    <div className={`${className}`}>
      <ReactMapGL
        {...viewport}
        onMove={evt => setViewport(evt.viewState)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        mapLib={import('mapbox-gl')}
        mapStyle={"mapbox://styles/mapbox/streets-v12"}
        ref={mapRef}
        >
        <NavigationControl showCompass={false} />

        <Marker draggable key='marker-example' latitude={37.89} longitude={-122.4} offset={[-15, -15]} color="red">
          {/* <button>
            <Image src={"vercel.svg"} alt="house" width={30} height={30} />
          </button> */}
        </Marker>
        
        {/* <Layer {...parkLayer} /> */}
      </ReactMapGL>
    </div>

  )
}

export default Map