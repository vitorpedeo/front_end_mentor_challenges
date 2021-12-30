import { useLocationContext } from '../../../contexts/LocationContext';

import { Container, GridItem, GridItemSpan, GridItemValue } from './styles';

export function LocationInfo() {
  const { location } = useLocationContext();

  return (
    <Container>
      <GridItem>
        <GridItemSpan>IP Address</GridItemSpan>
        <GridItemValue title={location.ip}>{location.ip}</GridItemValue>
      </GridItem>

      <GridItem>
        <GridItemSpan>Location</GridItemSpan>
        <GridItemValue title={location.address}>
          {location.address}
        </GridItemValue>
      </GridItem>

      <GridItem>
        <GridItemSpan>Timezone</GridItemSpan>
        <GridItemValue title={location.timezone}>
          {location.timezone}
        </GridItemValue>
      </GridItem>

      <GridItem>
        <GridItemSpan>ISP</GridItemSpan>
        <GridItemValue title={location.isp}>{location.isp}</GridItemValue>
      </GridItem>
    </Container>
  );
}
