import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
  padding: 3rem 0 7rem 0;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    padding-bottom: 10rem;
  }
`;

export const BackgroundImage = styled(Image)`
  z-index: 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: 700;
  z-index: 1;
`;
