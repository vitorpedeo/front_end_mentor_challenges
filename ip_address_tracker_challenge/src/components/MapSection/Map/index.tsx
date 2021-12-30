import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet';

import { useLocationContext } from '../../../contexts/LocationContext';

const markerIcon = new Leaflet.Icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [40, 48],
});

export default function Map() {
  const { location } = useLocationContext();

  const mapKey = Math.random();

  return (
    <MapContainer
      key={mapKey}
      center={[location.coords[0] + 0.0008, location.coords[1]]}
      zoom={20}
      scrollWheelZoom={false}
      dragging={false}
      style={{ height: '100%', zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
      />
      <Marker position={location.coords} icon={markerIcon} />
    </MapContainer>
  );
}
