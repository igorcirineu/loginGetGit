import styled from "styled-components";
import imgs from "../../assets/images/background.png";

export const Content = styled.div`
  background-image: url(${imgs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  weight: 1440px;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    width: 600px;

    @media (max-width: 720px) {
      max-width: 600px;
      margin: 0 1rem;
    }

    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 1.5rem 1.5rem 1.5rem;

      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;

      color: var(--blue);
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  padding: 1rem;
  max-height: 600px;

  img{
    width: 400px;
    height: 72px;

    @media (max-width: 720px) {
    width: 200px;
    height: 36px;
    }
  }

  form{
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start ;


    label{
      font-size:20px;
      color: var(--text);
      margin-bottom: 0.5rem;   

    }

    input{
      width: 100%;
      height: 4rem;
      background: #FFFFFF;
      border: 1px solid #C4C4C4;
      box-sizing: border-box;
      border-radius: 8px;

      margin-bottom: 2rem;
      padding: 0.5rem 1rem;

      font-size: 1.25rem;
         
      &:nth-child(2)  {
        margin-bottom: 2rem
      }
      &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    }

    button{
      width: 260px;
      height: 60px;

      font-style: normal;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 28px;
      color: #FFFFFF;

      margin: 0 auto;
      background: var(--blue);
      border-radius: 8px;
    }
  }
}
`;
