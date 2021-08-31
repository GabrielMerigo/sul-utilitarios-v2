import styled from 'styled-components';

interface FooterContainerProps {
  position: string;
  direction: string;
}

export const FooterContainer = styled.section<FooterContainerProps>`
  width: 100%;
  height: 9rem;
  padding: 2.3px 2rem;
  background: var(--gray-dark);
  display: flex;
  flex-direction: column;
  text-align: center;
  position: ${props => props.position};
  bottom: ${props => props.direction};

  p{
    color: white;
    font-size: 1.2rem;
    line-height:2rem;
  } 
  
  p:nth-child(1){
    margin-top: 2rem;
  }

  span{
    color: #4298f5;
  }
`;