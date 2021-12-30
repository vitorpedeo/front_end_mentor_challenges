import styled from 'styled-components';

export const Container = styled.article`
  padding: 2rem;
  max-width: min(90vw, 1020px);
  width: 100%;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1;

  position: absolute;
  top: -4.5rem;
  left: 50%;
  transform: translate(-50%);

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 2rem;
  }

  @media screen and (max-width: 640px) {
    top: -8rem;

    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    row-gap: 2rem;
  }
`;

export const GridItem = styled.div`
  width: 100%;

  & + div {
    padding-left: 2rem;
    border-left: 1px solid #d9d9d9;

    @media screen and (max-width: 1024px) {
      padding-left: 0;
      border-left: none;
    }
  }

  @media screen and (max-width: 640px) {
    text-align: center;
  }
`;

export const GridItemSpan = styled.span`
  color: hsl(0, 0%, 59%);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media screen and (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const GridItemValue = styled.p`
  margin-top: 0.75rem;
  color: hsl(0, 0%, 17%);
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
  }
`;
