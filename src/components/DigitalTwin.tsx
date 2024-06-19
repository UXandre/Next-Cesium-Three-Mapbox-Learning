"use client"

import cesium, { Cartesian3, Math, createWorldTerrainAsync, IonResource } from 'cesium'
import { CameraFlyTo, Cesium3DTileset, Entity, Viewer } from 'resium'

const terrainProvider = async () => createWorldTerrainAsync();

export default function DigitalTwin({ className }: {className: string}) {

    return (
    <>
        <Viewer terrainProvider={terrainProvider()} className={`${className}`}>
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