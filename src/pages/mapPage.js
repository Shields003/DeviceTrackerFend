import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "@emotion/styled";
// Local Imports
import MapFilters from "../components/mapPageComponents/mapFilters";
import FooterWithDate from "../components/footer/footerWithDate";
import mockMapData from "../components/mapPageComponents/mockMapData";

//"AIzaSyCk70atKQcIJnO173t_WtTRHx4_i4hvUv8"

const TopContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.complementary2};
  width: 100vw;
  height: 95vh;
  overflow: hidden;
  margin-left: -8px;
  padding: 0;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 92vw;
  margin: 2vh auto;
  margin-top: 24px;
  border: 3px solid ${({ theme }) => theme.colors.accent2};
  border-radius: 20px;
  overflow: hidden;
`;

const renderMarkers = (map, maps) => {
  mockMapData.forEach((location) => {
    const marker = new maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.name,
    });
  });
};

const MapPage = () => {
  const apiKey = "AIzaSyCk70atKQcIJnO173t_WtTRHx4_i4hvUv8"

  const mapOptions = {
    center: {
      lat: 41.255,
      lng: -95.913,
    },
    zoom: 5,
    mapTypeId: "hybrid",
    styles: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
    ],
  };

  const handleGoogleApiLoaded = ({ map, maps }) => {
    renderMarkers(map, maps);
  };

  return (
    <TopContainer>
      <MapFilters />
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
          options={() => ({
            mapTypeId: mapOptions.mapTypeId,
            styles: mapOptions.styles,
          })}
          onGoogleApiLoaded={handleGoogleApiLoaded}
        ></GoogleMapReact>

        <FooterWithDate />
      </MapContainer>
    </TopContainer>
  );
};

export default MapPage;