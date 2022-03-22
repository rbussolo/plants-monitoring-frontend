import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  font-size: 1.25rem;
  height: 8rem;
  background-color: var(--dark-green);

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1024px;

    > div{
      display: flex;
      align-items: center;
      height: 5rem;
      color: #fff;
      font-size: 2rem;

      padding-left: 3rem;
    }
    
    > nav {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;

      ul {
        list-style-type: none;
        
        display: flex;
        justify-content: space-between;

        > li > a, > li > button {
          display: block;
          border: none;
          text-decoration: none;
          color: #fff;
          font-size: 1.25rem;
          padding: 0.5rem 1rem;
          background-color: var(--green);

          transition: filter 0.2s;

          &:hover {
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;