import dynamic from 'next/dynamic';

import { LocationInfo } from './LocationInfo';

import { Container, LoadingMap } from './styles';

const MapWithoutSSR = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <LoadingMap>Loading map...</LoadingMap>,
});

export function MapSection() {
  return (
    <Container>
      <LocationInfo />
      <MapWithoutSSR />
    </Container>
  );
}
