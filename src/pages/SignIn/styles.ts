import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  background-color: var(--green);

  > div {
    min-width: 600px;
   
    margin-top: -2rem;
    padding: 2rem;
    background-color: #FFF;

    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5); 
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);

    @media (max-width: 720px) {
      min-width: 100%;
      margin-top: none;
    }

    > form > div + div {
      padding-top: 1rem;
    }

    > div.login-title {
      font-size: 2rem;
      padding-bottom: 1rem;

      display: flex;
      justify-content: center;
    }

    div.group-button {
      display: flex;
      justify-content: center;

      margin-bottom: 1rem;

      button {
        font-size: 1.25rem;
        padding: 0.25rem 0.5rem;

        min-width: 10rem;
        border: none;
        color: #FFF;
        background-color: var(--green);

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`