import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  line-height: 1.5rem;

  img{
    margin-left:11rem;
    cursor: pointer;
  }

  ul{
    list-style-type: none;
    display: flex;
    margin-right:8rem;
    margin-top: 0.4rem;

    a{
      padding: 2rem 1.6rem;
      font-size: 1.6rem;
      font-style: italic;
      text-decoration: none;
      color: var(--gray-black);
      
      span:hover{
        transition: color 0.3s;
        color: red;
        cursor: pointer;
      }
    }
  }
`;