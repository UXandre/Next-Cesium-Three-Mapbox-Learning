import Head from 'next/head'
import dynamic from 'next/dynamic'
import DigitalTwin from '@/components/DigitalTwin'
import Map from '@/components/Map'
import Map2 from '@/components/Map2'


export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.js"></script>
      </Head>
      <div className='container'>
        <DigitalTwin className='left' />
        {/* <Map className='right' /> */}
        <Map2 className='right' />
      </div>

    </>
  )
}