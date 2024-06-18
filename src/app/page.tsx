import Head from 'next/head'
import dynamic from 'next/dynamic'
import DigitalTwin from '../components/DigitalTwin'

// const DigitalTwin = dynamic(
//   () => import('../components/DigitalTwin'),
//   { ssr: false }
// )

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      <DigitalTwin />
    </>
  )
}