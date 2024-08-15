// pages/index.js
import dynamic from "next/dynamic";
import Head from "next/head";

const MapComponent = dynamic(() => import("../components/MapComponent"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>City Map</title>
        <meta name="description" content="A map showing major cities in India with React Leaflet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MapComponent />
    </div>
  );
}
