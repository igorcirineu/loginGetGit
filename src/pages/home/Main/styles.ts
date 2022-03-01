import styled from "styled-components";
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 640px;
  margin: 0 auto;
  padding-top: 5rem;

  @media (max-width: 720px) {
    padding: 3rem 1rem 1rem;
  }
  }

  label{
      font-size:20px;
      color: var(--text);
      margin-bottom: 0.5rem;   

    }

  div{
    display: flex;

      input{
      width: 100%;
      height: 4rem;
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      box-sizing: border-box;
      border-radius: 8px;

      margin-bottom: 2rem;
      margin-right: 1rem;
      padding: 0.5rem 1rem;

      font-size: 1.25rem;
      &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    }

    button{
      width: 70px;
      height: 4rem;

      font-style: normal;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 28px;
      color: #FFFFFF;

      margin: 0 auto;
      background: var(--blueDark);
      border-radius: 8px;
    }
    }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: nowrap;

  color: var(--text);

  padding: 1rem;
  max-height: 600px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    img {
      margin-right: 1rem;
      width: 146px;
      height: 146px;
      border-radius: 100px;
      border: solid 7px var(--blueDark);
      @media (max-width: 720px) {
        margin-right: 0;
      }
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Header = styled.div`
  width: 100%
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
  }

  div{
    display: flex;
    flex-direction: column;

    @media (max-width: 720px) {
    padding: 0.5rem 0;
    }

    p{
      font-size: 0.875rem;
    }

  }

`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  div {
    &:first-child {
      padding-bottom: 0.5rem;
    }
  }
`;

export const Footer = styled.div`
  a{
    color: var(--text)
    font-size: 0.875rem;
  }
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
  }
  
`;

export const Load = styled.div`
  a{
    color: var(--text)
    font-size: 0.875rem;
  }
`;
