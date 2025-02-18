import styled from 'styled-components';

export const Container = styled.div`
  /* width: 34.375rem; */
  height: 710px;
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

export const Poster = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 2.55rem;
  font-weight: 900;
  color: #fff;
  line-height: 100%;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  font-size: 1.0625rem; /* 17px */
  padding: 0.46875rem 0.625rem; /* 위아래 7.5px, 좌우 10px */
  height: 1.6875rem; /* 27px */
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  white-space: nowrap;
`;
export const Description = styled.p`
  font-size: 1.1rem; /* 20px */
  color: #939598;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 최대 3줄 */
  -webkit-box-orient: vertical;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  padding: ${(props) => (props.$padding ? props.$padding : '')};
  position: ${(props) => props.$position};
  width: ${(props) => props.$width || 'auto'};
  border-top: ${(props) => props.$borderTop};
  white-space: ${(props) => props.$whiteSpace};
  font-size: ${(props) => props.$fontSize};

  @media (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    width: 100%;
    flex-direction: column;
  }
`;

export const Label = styled.span`
  font-size: 6.75rem;
  font-weight: 900;
  line-height: 100%;
  @media (max-width: 1024px) {
    font-size: 30px;
    font-weight: 900;
    line-height: 100%;
  }
`;
