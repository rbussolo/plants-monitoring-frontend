import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  font-size: 1.25rem;
  height: calc(100% - 3rem);
  background-color: #f6f7f8;

  > div {
    width: 100%;
    max-width: 1024px;
    height: max-content;

    margin-top: 3rem;
    padding: 1rem;

    background-color: #fff;

    > p {
      font-size: 1.5rem;
      font-weight: 700;

      margin-bottom: 1rem;
    }

    table {
      width: 100%;
      border-spacing: 0px;

      thead tr {
        background-color: var(--green);
        color: #fff;

        td {
          padding: 0.5rem 1rem;
        }
      }

      tbody tr{
        background-color: #75e5a4;

        :nth-child(odd) {
          background-color: #bfffda;
        }

        :hover {
          filter: brightness(0.9);
        }

        td {
          padding: 0.25rem 0.5rem;
        }
      }
    }
  }
`;