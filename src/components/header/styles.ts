import styled from "styled-components";

export const Content = styled.div`
  weight: 100%;
  height: 100px;
  background: var(--blue);
  }
`;

export const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 0px;

  @media (max-width: 720px) {
    display: none;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
  }
`;

export const ContainerSmall = styled.div`
  display: none;

  @media (max-width: 720px) {
    display: Flex;
    max-width: 1040px;
    margin: 0 auto;
    padding: 0px;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1rem;

    strong {
      padding: 1rem 1rem;
    }
  }
`;

export const Box = styled.div`
  color: white;

  strong{
    padding: 0 1rem;
    border-right: solid 1px white; 
  }

  button{
    padding: 0 1rem;
    background: none;
    border: none;
    color: white;
    font-weight: bold;
  }

  }
`;

export const Box2 = styled.div`
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img{
    width: 180px;
    height: 35px;
  }

  button{
    padding: 0 1rem;
    background: none;
    border: none;
    color: white;
    font-weight: bold;
  }

  }
`;
