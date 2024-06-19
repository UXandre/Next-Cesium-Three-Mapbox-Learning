import Head from 'next/head'
import dynamic from 'next/dynamic'
import DigitalTwin from '@/components/DigitalTwin'
import Map from '@/components/Map'


export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      <div className='container'>
        <DigitalTwin className='left' />
        <Map className='right' />
      </div>

    </>
  )
}