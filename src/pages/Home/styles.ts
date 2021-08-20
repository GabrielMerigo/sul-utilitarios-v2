import styled from 'styled-components';

export const Img = styled.img`
	background-size: 100% 100%;
	width: 100%;
	height: 29rem;
	background-repeat: no-repeat;
	border-bottom: solid 0.35rem #9e9ea5;
  margin-top: 2rem;
`;

export const HighlightedVehicles = styled.div`
  .line-title{
    max-width: 900px;
    margin: 0.4rem auto;
    position: relative;
    text-align: center;

    div{
      margin-top: 1.4rem;
      position: absolute;
      border: 1px solid black;
      background-color: black;
      width: 100%;
      
    }

    h2 {
      font-size: 2rem;
      background: white;
      position: relative;
      display: inline-block;
      text-align: center;
      padding: 0 1rem;
      text-transform: uppercase;
      font-style: italic;
    }

  }
`;