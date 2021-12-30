import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 3rem;
  padding: 0 2rem;
  width: 100%;
  height: 60px;
  border-radius: 1rem;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 640px) {
    margin-top: 2rem;
  }
`;

export const IPInput = styled.input`
  padding-left: 1.5rem;
  max-width: 600px;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 1rem 0 0 1rem;

  &::placeholder {
    color: hsl(0, 0%, 59%);
  }

  &:placeholder-shown {
    text-overflow: ellipsis;
  }
`;

export const SearchButton = styled.button`
  padding: 0 1.5rem;
  height: 100%;
  border: none;
  border-radius: 0 1rem 1rem 0;
  background: hsl(0, 0%, 17%);
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
