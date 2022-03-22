
import styled from 'styled-components'

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    display: flex;
    
    align-items: center;
    position: relative;
    
    transition: all 0.2s;
    
    outline: none;
    appearance: none;
    
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2rem;
    border-radius: 0.25rem;
    border: 1px solid;

    &:hover {
      border-color: var(--green);
    }

    &:focus {
      border-color: var(--dark-green);
    }
  }
`