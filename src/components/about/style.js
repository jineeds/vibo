import styled from 'styled-components';

export const AboutBanner = styled.div`
  position: relative;
  color: white;
  width: 100%;
  heith: 300px;
  .banner-container {
    width: 100%;
    height: 500px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }

  .banner-content {
    position: absolute;
    top: 20%;
    left: 20%;
    z-index: 1;
    text-align: center;
    height: 300px;
    overflow: hidden;

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      .default {
        font-family: NanumSquare Neo;
        font-weight: 700;
        font-size: 80px;
      }
      .special {
        font-family: NanumSquare Neo;
        font-weight: 900;
        font-size: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      .default {
        font-family: NanumSquare Neo;
        font-weight: 700;
        font-size: 80px;
      }
      .vibo {
        font-family: NanumSquare Neo;
        font-weight: 900;
        font-size: 100px;
        color: var(--primary-base);
      }
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 14px;
        color: var(--gray-500);
      }
    }
  }
`;

export const OriginalContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h2 {
    font-family: NanumSquare Neo;
    font-size: 40px;
    font-weight: 800;
    line-height: 100px;
    text-align: center;
    letter-spacing: 0.01em;
  }
  p {
    font-family: NanumSquare Neo;
    font-weight: 800;
    font-size: 20px;
    color: var(--gray-500);
  }
`;

export const OriginalWrapper = styled.div`
  position: relative;
  text-align: left;
  color: white;
  .card {
    display: flex;
    gap: 50px;
    .card01 {
      width: 700px;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-stsart;
      h1 {
        text-align: left;
        font-family: NanumSquare Neo;
        font-size: 80px;
        font-weight: 900;
        line-height: 130%;
      }
    }
    .card02 {
      img {
        width: 353.14px;
        height: 569.44px;
      }
    }
    .card03 {
      img {
        width: 353.14px;
        height: 569.44px;
      }
    }
  }
`;

export const AboutPswiperWrapper = styled.div`
  width: 100%;
  background: #000;
  padding: 20px 0;
  overflow: hidden;
  position: absolute;
  top: 300px;

  .slider-container {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .slide-track {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.02s linear;
  }

  .slide {
    width: 474px;
    height: 281px;
    margin: 10px;
    background: #111;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const ContentContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .title {
    position: absolute;
    top: 70px;
    h2 {
      font-family: NanumSquare Neo;
      font-size: 40px;
      font-weight: 800;
      line-height: 100px;
      text-align: center;
      letter-spacing: 0.01em;
    }
    p {
      font-family: NanumSquare Neo;
      font-weight: 800;
      font-size: 20px;
      color: var(--gray-500);
    }
  }

  button {
    position: absolute;
    bottom: 0;
    background-color: var(--primary-base);
    width: 239px;
    height: 51px;
    font-weight: 800;
    font-size: 24px;
    border-radius: 50px;
  }
`;

export const FAQContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #191919;
  color: white;
  border-radius: 10px;
  text-align: center;

  .faq-title {
    font-size: 28px;
    font-weight: 900;
    color: white;
    margin-bottom: 20px;
  }
`;

export const FAQItem = styled.div`
  background-color: ${({ active }) => (active ? '#07ffe6' : '#3e3e3f')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  padding: 16px 20px;
  margin-bottom: 10px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #07ffe6;
    color: black;
  }
`;

export const Question = styled.div`
  flex-grow: 1;
  text-align: left;
  font-weight: 700;
`;

export const Icon = styled.span`
  transition: transform 0.3s ease;
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const Answer = styled.div`
  padding: 10px;
  font-size: 16px;
  text-align: left;
  color: #d1d2d4;
  background-color: #2a2a2a;
  border-radius: 4px;
  margin-top: 10px;
`;
