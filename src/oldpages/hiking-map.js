import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MaxContainer } from "../components/share-ui";

const HikingMap = ({ data }) => {
  return <div>
    <Helmet>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
            integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
            crossOrigin="" />
    </Helmet>

    <div tw="bg-darkBeige pb-5 min-h-screen text-green-700">
      <MaxContainer>
        <MapContainer center={[43.7657264,-79.4187463]} zoom={12} scrollWheelZoom={false} style={{height:500}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </MaxContainer>
    </div>

  </div>;
};
//
// export const data = graphql`
//   query pageQuery($id: String) {
//     contentfulBlogPost(id: { eq: $id }) {
//       title
//       description {
//         description
//       }
//       article {
//         raw
//       }
//     }
//   }
// `;

export default HikingMap;