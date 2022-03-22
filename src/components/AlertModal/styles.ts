import styled from "styled-components";

export const Modal = styled.div`
  display: none;
  position: fixed;
  
  z-index: 1;
  padding-top: 10rem;
  left: 0;
  top: 0;
  
  width: 100%;
  height: 100%;
  overflow: auto;
  
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  > div {
    background-color: #fefefe;
    margin: auto;
    padding: 2rem;
    border: 1px solid #888;
    width: 600px;

    .modal-header{
      display: flex;
      align-items: center;
      flex-direction: column;

      font-size: 2rem;

      svg {
        font-size: 4rem;
        color: #ef5350;
      }

      &.modal-success svg {
        color: var(--green);
      }
    }

    .modal-body {
      display: flex;
      justify-content: center;
      font-size: 1.5rem;

      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .modal-footer {
      display: flex;
      justify-content: center;

      button, a {
        font-size: 1.25rem;
        padding: 0.25rem 0.5rem;

        text-align: center;
        text-decoration: none;

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