import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;

  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    margin: 8px;
    width: 64px;
    height: 64px;
    border: 6px solid #fff;
    border-radius: 50%;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;

    display: block;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
