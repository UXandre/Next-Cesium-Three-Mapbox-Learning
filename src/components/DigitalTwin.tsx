"use client"

import cesium, { Cartesian3, Math, createWorldTerrainAsync, IonResource } from 'cesium'
import { useRef, useState } from 'react';
import { CameraFlyTo, Cesium3DTileset, Entity, Viewer } from 'resium'


export default function DigitalTwin() {
    const data = {
        type: "Feature",
        properties: {
            name: "Coors Field",
            amenity: "Baseball Stadium",
            popupContent: "This is where the Rockies play!",
        },
        geometry: {
            type: "Point",
            coordinates: [-104.99404, 39.75621],
        },
    };


    const [flag, setFlag] = useState<Boolean>(false);
    const terrainProvider = async () => createWorldTerrainAsync();

    const viewerRef = useRef<any>();

    return (
    <>
        <Viewer full terrainProvider={terrainProvider()}>
            <Cesium3DTileset url={IonResource.fromAssetId(96188)} />
            <CameraFlyTo destination={Cartesian3.fromDegrees(-122.4175, 37.655, 400)}
                orientation={(Math.toRadians(0.0), Math.toRadians(-15))} />
            <Entity
                description={'test'}
                name='tokyo'
                point={{ pixelSize: 10 }}
                position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
            />

        </Viewer>
    </>

    )
}