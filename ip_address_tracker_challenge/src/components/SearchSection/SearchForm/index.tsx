import { FormEvent, useState } from 'react';
import Image from 'next/image';

import { useLocationContext } from '../../../contexts/LocationContext';

import { Container, IPInput, SearchButton } from './styles';

export function SearchForm() {
  const [ip, setIp] = useState('');

  const { searchLocationByIP } = useLocationContext();

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    const ipRegex =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;

    if (!ip || !ipRegex.test(ip)) {
      alert('Invalid IP value!');

      return;
    }

    searchLocationByIP(ip);
  }

  return (
    <Container autoComplete="off" onSubmit={onSubmit}>
      <IPInput
        id="ip"
        name="ip"
        type="text"
        placeholder="Search for any IP address or domain"
        value={ip}
        onChange={event => setIp(event.target.value)}
      />
      <SearchButton type="submit">
        <Image
          src="/images/icon-arrow.svg"
          alt="Search"
          width={14}
          height={16}
        />
      </SearchButton>
    </Container>
  );
}
