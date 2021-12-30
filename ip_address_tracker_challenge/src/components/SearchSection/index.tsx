import { SearchForm } from './SearchForm';
import { Container, BackgroundImage, Title } from './styles';

export function SearchSection() {
  return (
    <Container>
      <BackgroundImage
        src="/images/pattern-bg.png"
        alt="Pattern Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <Title>IP Address Tracker</Title>
      <SearchForm />
    </Container>
  );
}
